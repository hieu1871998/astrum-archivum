import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateWithoutTransactionsInput {
    id?: string | undefined;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutAccountsInput;
}
