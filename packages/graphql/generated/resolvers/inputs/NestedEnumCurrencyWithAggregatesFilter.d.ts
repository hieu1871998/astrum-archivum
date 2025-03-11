import { NestedEnumCurrencyFilter } from "../inputs/NestedEnumCurrencyFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumCurrencyWithAggregatesFilter {
    equals?: "USD" | undefined;
    in?: "USD"[] | undefined;
    notIn?: "USD"[] | undefined;
    not?: NestedEnumCurrencyWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumCurrencyFilter | undefined;
    _max?: NestedEnumCurrencyFilter | undefined;
}
