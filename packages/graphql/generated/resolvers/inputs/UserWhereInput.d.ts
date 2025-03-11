import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { BudgetListRelationFilter } from "../inputs/BudgetListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    email?: StringFilter | undefined;
    name?: StringNullableFilter | undefined;
    password?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    accounts?: AccountListRelationFilter | undefined;
    transactions?: TransactionListRelationFilter | undefined;
    budgets?: BudgetListRelationFilter | undefined;
}
