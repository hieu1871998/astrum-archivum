import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
export declare class TagWhereInput {
    AND?: TagWhereInput[] | undefined;
    OR?: TagWhereInput[] | undefined;
    NOT?: TagWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    transactionIds?: StringNullableListFilter | undefined;
    transactions?: TransactionListRelationFilter | undefined;
}
