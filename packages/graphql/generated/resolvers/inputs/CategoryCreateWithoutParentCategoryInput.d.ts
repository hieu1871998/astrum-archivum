import { BudgetCreateNestedManyWithoutCategoryInput } from "../inputs/BudgetCreateNestedManyWithoutCategoryInput";
import { CategoryCreateNestedManyWithoutParentCategoryInput } from "../inputs/CategoryCreateNestedManyWithoutParentCategoryInput";
import { TransactionCreateNestedManyWithoutCategoryInput } from "../inputs/TransactionCreateNestedManyWithoutCategoryInput";
export declare class CategoryCreateWithoutParentCategoryInput {
    id?: string | undefined;
    name: string;
    icon?: string | undefined;
    color?: string | undefined;
    subcategories?: CategoryCreateNestedManyWithoutParentCategoryInput | undefined;
    transactions?: TransactionCreateNestedManyWithoutCategoryInput | undefined;
    Budget?: BudgetCreateNestedManyWithoutCategoryInput | undefined;
}
