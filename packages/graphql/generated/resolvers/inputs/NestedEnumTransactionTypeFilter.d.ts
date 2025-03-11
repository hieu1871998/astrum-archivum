export declare class NestedEnumTransactionTypeFilter {
    equals?: "INCOME" | "EXPENSE" | "TRANSFER" | undefined;
    in?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    notIn?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    not?: NestedEnumTransactionTypeFilter | undefined;
}
