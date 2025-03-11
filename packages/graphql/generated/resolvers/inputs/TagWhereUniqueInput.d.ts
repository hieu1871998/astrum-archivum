import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TagWhereInput } from "../inputs/TagWhereInput";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
export declare class TagWhereUniqueInput {
    id?: string | undefined;
    AND?: TagWhereInput[] | undefined;
    OR?: TagWhereInput[] | undefined;
    NOT?: TagWhereInput[] | undefined;
    name?: StringFilter | undefined;
    transactionIds?: StringNullableListFilter | undefined;
    transactions?: TransactionListRelationFilter | undefined;
}
