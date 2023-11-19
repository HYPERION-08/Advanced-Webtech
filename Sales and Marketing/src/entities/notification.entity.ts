import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification{
  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  content : string;

  @Column({default : false})
  read: boolean;

  @CreateDateColumn()
  createdAt: Date;
}