import { BudgetCreateNestedManyWithoutCategoryInput } from "../inputs/BudgetCreateNestedManyWithoutCategoryInput";
import { CategoryCreateNestedOneWithoutSubcategoriesInput } from "../inputs/CategoryCreateNestedOneWithoutSubcategoriesInput";
import { TransactionCreateNestedManyWithoutCategoryInput } from "../inputs/TransactionCreateNestedManyWithoutCategoryInput";
export declare class CategoryCreateWithoutSubcategoriesInput {
    id?: string | undefined;
    name: string;
    icon?: string | undefined;
    color?: string | undefined;
    parentCategory?: CategoryCreateNestedOneWithoutSubcategoriesInput | undefined;
    transactions?: TransactionCreateNestedManyWithoutCategoryInput | undefined;
    Budget?: BudgetCreateNestedManyWithoutCategoryInput | undefined;
}
