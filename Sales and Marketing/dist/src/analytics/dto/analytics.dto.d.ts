export declare class IncrementEndpointCountDto {
    endpoint: string;
}
declare class CustomerDto {
    name: string;
    email: string;
}
export declare class CreateSalesAnalyticsDto {
    productName: string;
    amount: number;
    customerData: CustomerDto[];
}
export declare class CreateMarketingAnalyticsDto {
    name: string;
    email: string;
    saleId?: number;
}
export {};
