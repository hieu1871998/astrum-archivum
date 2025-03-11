import { NestedEnumAccountTypeFilter } from "../inputs/NestedEnumAccountTypeFilter";
import { NestedEnumAccountTypeWithAggregatesFilter } from "../inputs/NestedEnumAccountTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumAccountTypeWithAggregatesFilter {
    equals?: "BANK" | "CREDIT" | "WALLET" | undefined;
    in?: Array<"BANK" | "CREDIT" | "WALLET"> | undefined;
    notIn?: Array<"BANK" | "CREDIT" | "WALLET"> | undefined;
    not?: NestedEnumAccountTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumAccountTypeFilter | undefined;
    _max?: NestedEnumAccountTypeFilter | undefined;
}
