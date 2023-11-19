import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./sales.entity";

@Entity()
export class Customer{
  @PrimaryGeneratedColumn()
  id : number;
  @Column()
  name : string;
  @Column()
  email: string;

  @ManyToOne(() => Sale,sale => sale.customers)
  sale : Sale;

}