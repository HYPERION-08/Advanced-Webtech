import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  productName : string;

  @Column()
  amount : number;

  @OneToMany(() => Customer, customer => customer.sale)
  customers : Customer[];

}