import { AccountCreateNestedOneWithoutTransactionsInput } from "../inputs/AccountCreateNestedOneWithoutTransactionsInput";
import { CategoryCreateNestedOneWithoutTransactionsInput } from "../inputs/CategoryCreateNestedOneWithoutTransactionsInput";
import { TagCreateNestedManyWithoutTransactionsInput } from "../inputs/TagCreateNestedManyWithoutTransactionsInput";
export declare class TransactionCreateWithoutUserInput {
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
    category?: CategoryCreateNestedOneWithoutTransactionsInput | undefined;
    tags?: TagCreateNestedManyWithoutTransactionsInput | undefined;
}
