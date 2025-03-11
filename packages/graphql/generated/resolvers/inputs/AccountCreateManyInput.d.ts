export declare class AccountCreateManyInput {
    id?: string | undefined;
    userId: string;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
