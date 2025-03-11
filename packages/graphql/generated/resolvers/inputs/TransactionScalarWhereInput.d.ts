import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumCurrencyFilter } from "../inputs/EnumCurrencyFilter";
import { EnumRecurrenceTypeFilter } from "../inputs/EnumRecurrenceTypeFilter";
import { EnumTransactionTypeFilter } from "../inputs/EnumTransactionTypeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class TransactionScalarWhereInput {
    AND?: TransactionScalarWhereInput[] | undefined;
    OR?: TransactionScalarWhereInput[] | undefined;
    NOT?: TransactionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    accountId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    amount?: FloatFilter | undefined;
    currency?: EnumCurrencyFilter | undefined;
    type?: EnumTransactionTypeFilter | undefined;
    description?: StringNullableFilter | undefined;
    notes?: StringNullableFilter | undefined;
    customIcon?: StringNullableFilter | undefined;
    date?: DateTimeFilter | undefined;
    recurrence?: EnumRecurrenceTypeFilter | undefined;
    categoryId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    tagIds?: StringNullableListFilter | undefined;
}
