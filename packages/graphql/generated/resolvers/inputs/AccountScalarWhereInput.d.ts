import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAccountTypeFilter } from "../inputs/EnumAccountTypeFilter";
import { EnumCurrencyFilter } from "../inputs/EnumCurrencyFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class AccountScalarWhereInput {
    AND?: AccountScalarWhereInput[] | undefined;
    OR?: AccountScalarWhereInput[] | undefined;
    NOT?: AccountScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    name?: StringFilter | undefined;
    type?: EnumAccountTypeFilter | undefined;
    currency?: EnumCurrencyFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
