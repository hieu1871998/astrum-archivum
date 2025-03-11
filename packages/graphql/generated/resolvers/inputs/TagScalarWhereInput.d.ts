import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class TagScalarWhereInput {
    AND?: TagScalarWhereInput[] | undefined;
    OR?: TagScalarWhereInput[] | undefined;
    NOT?: TagScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    transactionIds?: StringNullableListFilter | undefined;
}
