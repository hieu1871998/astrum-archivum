import { CategoryUpdateManyWithoutParentCategoryNestedInput } from "../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput";
import { CategoryUpdateOneWithoutSubcategoriesNestedInput } from "../inputs/CategoryUpdateOneWithoutSubcategoriesNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutCategoryNestedInput } from "../inputs/TransactionUpdateManyWithoutCategoryNestedInput";
export declare class CategoryUpdateWithoutBudgetInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    parentCategory?: CategoryUpdateOneWithoutSubcategoriesNestedInput | undefined;
    subcategories?: CategoryUpdateManyWithoutParentCategoryNestedInput | undefined;
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput | undefined;
}
