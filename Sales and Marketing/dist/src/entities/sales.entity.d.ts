import { Customer } from "./customer.entity";
export declare class Sale {
    id: number;
    productName: string;
    amount: number;
    customers: Customer[];
}
