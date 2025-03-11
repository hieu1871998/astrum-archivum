import { NestedEnumRecurrenceTypeFilter } from "../inputs/NestedEnumRecurrenceTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRecurrenceTypeWithAggregatesFilter {
    equals?: "OFF" | "REPEAT" | "INSTALLMENT" | undefined;
    in?: Array<"OFF" | "REPEAT" | "INSTALLMENT"> | undefined;
    notIn?: Array<"OFF" | "REPEAT" | "INSTALLMENT"> | undefined;
    not?: NestedEnumRecurrenceTypeWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRecurrenceTypeFilter | undefined;
    _max?: NestedEnumRecurrenceTypeFilter | undefined;
}
