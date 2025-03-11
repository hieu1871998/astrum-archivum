import { BudgetUpdateManyWithoutCategoryNestedInput } from "../inputs/BudgetUpdateManyWithoutCategoryNestedInput";
import { CategoryUpdateManyWithoutParentCategoryNestedInput } from "../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput";
import { CategoryUpdateOneWithoutSubcategoriesNestedInput } from "../inputs/CategoryUpdateOneWithoutSubcategoriesNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CategoryUpdateWithoutTransactionsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    parentCategory?: CategoryUpdateOneWithoutSubcategoriesNestedInput | undefined;
    subcategories?: CategoryUpdateManyWithoutParentCategoryNestedInput | undefined;
    Budget?: BudgetUpdateManyWithoutCategoryNestedInput | undefined;
}
