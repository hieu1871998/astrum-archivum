import { NestedEnumTransactionTypeFilter } from "../inputs/NestedEnumTransactionTypeFilter";
export declare class EnumTransactionTypeFilter {
    equals?: "INCOME" | "EXPENSE" | "TRANSFER" | undefined;
    in?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    notIn?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    not?: NestedEnumTransactionTypeFilter | undefined;
}
