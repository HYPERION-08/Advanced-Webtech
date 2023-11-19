import { Body, Controller, Get, Param, Put, Delete, Post, UseInterceptors, Res, Query, HttpStatus, HttpException, UnauthorizedException } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Generate2FADto, ProfileDto } from './dto/profile.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from "multer";
import { Response } from 'express';
import * as path from "path";


@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file',{
    storage : diskStorage({
      destination : "./uploads",
      filename : (req,file,cb)=>{
        // const ext = new Date().getTime();
        // cb(null,`${ext+path.extname(file.originalname)}`)
        cb(null,`${file.originalname}`)
      }
    })
  }))
  async uploadFile(){
      return "File Uploaded";
  }

  @Get('getFile')
  getFile(@Res() res: Response, @Body('fileName') fileName: string) {
    if (!fileName) {
      res.status(HttpStatus.BAD_REQUEST).send('File name is required');
      return;
    }
    res.sendFile(fileName, { root: './uploads' });
  }

  @Get(':id')
  getProfile(@Param('id') id : number){
    return this.profileService.getProfile(id);
  }

  @Put('update/:id')
  update(@Param('id')id:number, @Body()data:ProfileDto){
    this.profileService.updateProfile(id,data);
    return "profile has been updated";
  }

  @Delete('delete/:id')
  delete(@Param('id') id:number){
    return this.profileService.deleteProfile(id);
  }



  @Post(':id/generate')
  async generate2FACode(@Param('id') id: number, @Body() dto: Generate2FADto): Promise<{ message: string }> {
    const result = await this.profileService.generateAndSend2FACode(id, dto);
    return result;
  }

  @Post(':id/verify')
async verify2FACode(@Param('id') id: number, @Body('code') code: string): Promise<{ message: string }> {
  try {
    const message = await this.profileService.verify2FACode(id, code);
    return { message };
  } catch (error) {
    // Handle specific exceptions if needed
    if (error instanceof UnauthorizedException) {
      throw new HttpException({ message: 'Invalid two-factor authentication code' }, HttpStatus.UNAUTHORIZED);
    }

    // Handle other exceptions or unexpected errors
    throw new HttpException({ message: 'An unexpected error occurred' }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
 }

@Post('campaign')
  async sendMarketingMail(@Body('marketingContent') marketingContent: string): Promise<string> {
    return this.profileService.sendMarketingMail(marketingContent);
  }

}
