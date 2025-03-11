import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CategoryScalarWhereWithAggregatesInput {
    AND?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    OR?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CategoryScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    icon?: StringNullableWithAggregatesFilter | undefined;
    color?: StringNullableWithAggregatesFilter | undefined;
    parentCategoryId?: StringNullableWithAggregatesFilter | undefined;
}
