export declare class AccountCreateManyUserInput {
    id?: string | undefined;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
