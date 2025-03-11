import { NestedEnumTransactionTypeFilter } from "../inputs/NestedEnumTransactionTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumTransactionTypeWithAggregatesFilter {
    equals?: "INCOME" | "EXPENSE" | "TRANSFER" | undefined;
    in?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    notIn?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    not?: NestedEnumTransactionTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTransactionTypeFilter | undefined;
    _max?: NestedEnumTransactionTypeFilter | undefined;
}
