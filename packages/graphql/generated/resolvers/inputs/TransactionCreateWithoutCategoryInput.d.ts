import { AccountCreateNestedOneWithoutTransactionsInput } from "../inputs/AccountCreateNestedOneWithoutTransactionsInput";
import { TagCreateNestedManyWithoutTransactionsInput } from "../inputs/TagCreateNestedManyWithoutTransactionsInput";
import { UserCreateNestedOneWithoutTransactionsInput } from "../inputs/UserCreateNestedOneWithoutTransactionsInput";
export declare class TransactionCreateWithoutCategoryInput {
    id?: string | undefined;
    amount: number;
    currency: "USD";
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    description?: string | undefined;
    notes?: string | undefined;
    customIcon?: string | undefined;
    date: Date;
    recurrence?: "OFF" | "REPEAT" | "INSTALLMENT" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    account: AccountCreateNestedOneWithoutTransactionsInput;
    user: UserCreateNestedOneWithoutTransactionsInput;
    tags?: TagCreateNestedManyWithoutTransactionsInput | undefined;
}
