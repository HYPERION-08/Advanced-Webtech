import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Analytics{
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  endpoint : string;

  @Column()
  count : number;

}