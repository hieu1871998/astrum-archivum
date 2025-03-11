import { TransactionCreateNestedManyWithoutAccountInput } from "../inputs/TransactionCreateNestedManyWithoutAccountInput";
export declare class AccountCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    transactions?: TransactionCreateNestedManyWithoutAccountInput | undefined;
}
