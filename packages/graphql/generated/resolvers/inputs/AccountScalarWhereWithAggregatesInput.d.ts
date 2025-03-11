import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAccountTypeWithAggregatesFilter } from "../inputs/EnumAccountTypeWithAggregatesFilter";
import { EnumCurrencyWithAggregatesFilter } from "../inputs/EnumCurrencyWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class AccountScalarWhereWithAggregatesInput {
    AND?: AccountScalarWhereWithAggregatesInput[] | undefined;
    OR?: AccountScalarWhereWithAggregatesInput[] | undefined;
    NOT?: AccountScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    type?: EnumAccountTypeWithAggregatesFilter | undefined;
    currency?: EnumCurrencyWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
