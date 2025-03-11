import { BudgetCreateNestedManyWithoutCategoryInput } from "../inputs/BudgetCreateNestedManyWithoutCategoryInput";
import { CategoryCreateNestedManyWithoutParentCategoryInput } from "../inputs/CategoryCreateNestedManyWithoutParentCategoryInput";
import { CategoryCreateNestedOneWithoutSubcategoriesInput } from "../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput";
export declare class CategoryCreateWithoutTransactionsInput {
    id?: string | undefined;
    name: string;
    icon?: string | undefined;
    color?: string | undefined;
    parentCategory?: CategoryCreateNestedOneWithoutSubcategoriesInput | undefined;
    subcategories?: CategoryCreateNestedManyWithoutParentCategoryInput | undefined;
    Budget?: BudgetCreateNestedManyWithoutCategoryInput | undefined;
}
