import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity('users')
export class Users{
  @PrimaryGeneratedColumn()
  id : number;
  
  @Column({nullable:false})
  name : string

  @Column({unique:true,nullable:false})
  email : string;

  @Column({nullable:false})
  password : string;


  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true }) // Nullable as the code is initially not set
  twoFactorCode: string;
  
  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password,10)
  }
}