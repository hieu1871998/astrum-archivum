import { NestedEnumRecurrenceTypeFilter } from "../inputs/NestedEnumRecurrenceTypeFilter";
export declare class EnumRecurrenceTypeFilter {
    equals?: "OFF" | "REPEAT" | "INSTALLMENT" | undefined;
    in?: Array<"OFF" | "REPEAT" | "INSTALLMENT"> | undefined;
    notIn?: Array<"OFF" | "REPEAT" | "INSTALLMENT"> | undefined;
    not?: NestedEnumRecurrenceTypeFilter | undefined;
}
