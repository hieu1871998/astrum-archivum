import { NestedEnumAccountTypeFilter } from "../inputs/NestedEnumAccountTypeFilter";
export declare class EnumAccountTypeFilter {
    equals?: "BANK" | "CREDIT" | "WALLET" | undefined;
    in?: Array<"BANK" | "CREDIT" | "WALLET"> | undefined;
    notIn?: Array<"BANK" | "CREDIT" | "WALLET"> | undefined;
    not?: NestedEnumAccountTypeFilter | undefined;
}
