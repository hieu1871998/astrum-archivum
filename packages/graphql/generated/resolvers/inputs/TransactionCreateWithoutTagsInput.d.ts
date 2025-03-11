import { AccountCreateNestedOneWithoutTransactionsInput } from "../inputs/AccountCreateNestedOneWithoutTransactionsInput";
import { CategoryCreateNestedOneWithoutTransactionsInput } from "../inputs/CategoryCreateNestedOneWithoutTransactionsInput";
import { UserCreateNestedOneWithoutTransactionsInput } from "../inputs/UserCreateNestedOneWithoutTransactionsInput";
export declare class TransactionCreateWithoutTagsInput {
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
    category?: CategoryCreateNestedOneWithoutTransactionsInput | undefined;
}
