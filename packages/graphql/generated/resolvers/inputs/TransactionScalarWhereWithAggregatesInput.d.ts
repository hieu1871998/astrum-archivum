import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumCurrencyWithAggregatesFilter } from "../inputs/EnumCurrencyWithAggregatesFilter";
import { EnumRecurrenceTypeWithAggregatesFilter } from "../inputs/EnumRecurrenceTypeWithAggregatesFilter";
import { EnumTransactionTypeWithAggregatesFilter } from "../inputs/EnumTransactionTypeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TransactionScalarWhereWithAggregatesInput {
    AND?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    OR?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TransactionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    accountId?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    amount?: FloatWithAggregatesFilter | undefined;
    currency?: EnumCurrencyWithAggregatesFilter | undefined;
    type?: EnumTransactionTypeWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    notes?: StringNullableWithAggregatesFilter | undefined;
    customIcon?: StringNullableWithAggregatesFilter | undefined;
    date?: DateTimeWithAggregatesFilter | undefined;
    recurrence?: EnumRecurrenceTypeWithAggregatesFilter | undefined;
    categoryId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
    tagIds?: StringNullableListFilter | undefined;
}
