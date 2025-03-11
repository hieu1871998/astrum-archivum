import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class CategoryScalarWhereInput {
    AND?: CategoryScalarWhereInput[] | undefined;
    OR?: CategoryScalarWhereInput[] | undefined;
    NOT?: CategoryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    icon?: StringNullableFilter | undefined;
    color?: StringNullableFilter | undefined;
    parentCategoryId?: StringNullableFilter | undefined;
}
