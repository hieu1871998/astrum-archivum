import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumAccountTypeFilter } from "../inputs/EnumAccountTypeFilter";
import { EnumCurrencyFilter } from "../inputs/EnumCurrencyFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class AccountWhereInput {
    AND?: AccountWhereInput[] | undefined;
    OR?: AccountWhereInput[] | undefined;
    NOT?: AccountWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    name?: StringFilter | undefined;
    type?: EnumAccountTypeFilter | undefined;
    currency?: EnumCurrencyFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    transactions?: TransactionListRelationFilter | undefined;
}
