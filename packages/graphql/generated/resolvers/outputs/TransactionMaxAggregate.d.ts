export declare class TransactionMaxAggregate {
    id: string | null;
    accountId: string | null;
    userId: string | null;
    amount: number | null;
    currency: "USD" | null;
    type: "INCOME" | "EXPENSE" | "TRANSFER" | null;
    description: string | null;
    notes: string | null;
    customIcon: string | null;
    date: Date | null;
    recurrence: "OFF" | "REPEAT" | "INSTALLMENT" | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
