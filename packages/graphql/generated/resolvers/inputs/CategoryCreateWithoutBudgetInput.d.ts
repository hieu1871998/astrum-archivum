import { CategoryCreateNestedManyWithoutParentCategoryInput } from "../inputs/CategoryCreateNestedManyWithoutParentCategoryInput";
import { CategoryCreateNestedOneWithoutSubcategoriesInput } from "../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput";
import { TransactionCreateNestedManyWithoutCategoryInput } from "../inputs/TransactionCreateNestedManyWithoutCategoryInput";
export declare class CategoryCreateWithoutBudgetInput {
    id?: string | undefined;
    name: string;
    icon?: string | undefined;
    color?: string | undefined;
    parentCategory?: CategoryCreateNestedOneWithoutSubcategoriesInput | undefined;
    subcategories?: CategoryCreateNestedManyWithoutParentCategoryInput | undefined;
    transactions?: TransactionCreateNestedManyWithoutCategoryInput | undefined;
}
