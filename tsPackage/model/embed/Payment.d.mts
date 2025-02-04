import { PaymentType } from './PaymentType.mjs';
export declare class Payment {
    paymentDate: number;
    paymentType: PaymentType | undefined;
    paid: number | undefined;
    constructor(partial: Partial<Payment>);
}
