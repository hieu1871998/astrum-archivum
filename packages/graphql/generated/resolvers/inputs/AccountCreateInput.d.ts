import { TransactionCreateNestedManyWithoutAccountInput } from "../inputs/TransactionCreateNestedManyWithoutAccountInput";
import { UserCreateNestedOneWithoutAccountsInput } from "../inputs/UserCreateNestedOneWithoutAccountsInput";
export declare class AccountCreateInput {
    id?: string | undefined;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutAccountsInput;
    transactions?: TransactionCreateNestedManyWithoutAccountInput | undefined;
}
