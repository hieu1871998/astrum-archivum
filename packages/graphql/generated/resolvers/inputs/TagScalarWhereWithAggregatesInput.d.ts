import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TagScalarWhereWithAggregatesInput {
    AND?: TagScalarWhereWithAggregatesInput[] | undefined;
    OR?: TagScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TagScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    transactionIds?: StringNullableListFilter | undefined;
}
