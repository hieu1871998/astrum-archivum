import { BudgetListRelationFilter } from "../inputs/BudgetListRelationFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { CategoryNullableRelationFilter } from "../inputs/CategoryNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TransactionListRelationFilter } from "../inputs/TransactionListRelationFilter";
export declare class CategoryWhereInput {
    AND?: CategoryWhereInput[] | undefined;
    OR?: CategoryWhereInput[] | undefined;
    NOT?: CategoryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    icon?: StringNullableFilter | undefined;
    color?: StringNullableFilter | undefined;
    parentCategoryId?: StringNullableFilter | undefined;
    parentCategory?: CategoryNullableRelationFilter | undefined;
    subcategories?: CategoryListRelationFilter | undefined;
    transactions?: TransactionListRelationFilter | undefined;
    Budget?: BudgetListRelationFilter | undefined;
}
