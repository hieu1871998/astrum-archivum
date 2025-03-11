import { NestedEnumTransactionTypeFilter } from "../inputs/NestedEnumTransactionTypeFilter";
import { NestedEnumTransactionTypeWithAggregatesFilter } from "../inputs/NestedEnumTransactionTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumTransactionTypeWithAggregatesFilter {
    equals?: "INCOME" | "EXPENSE" | "TRANSFER" | undefined;
    in?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    notIn?: Array<"INCOME" | "EXPENSE" | "TRANSFER"> | undefined;
    not?: NestedEnumTransactionTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTransactionTypeFilter | undefined;
    _max?: NestedEnumTransactionTypeFilter | undefined;
}
