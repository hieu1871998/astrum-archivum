import { TransactionCreatetagIdsInput } from "../inputs/TransactionCreatetagIdsInput";
export declare class TransactionCreateManyAccountInput {
    id?: string | undefined;
    userId: string;
    amount: number;
    currency: "USD";
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    description?: string | undefined;
    notes?: string | undefined;
    customIcon?: string | undefined;
    date: Date;
    recurrence?: "OFF" | "REPEAT" | "INSTALLMENT" | undefined;
    categoryId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    tagIds?: TransactionCreatetagIdsInput | undefined;
}
