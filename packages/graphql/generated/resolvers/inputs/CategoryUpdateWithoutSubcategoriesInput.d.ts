import { BudgetUpdateManyWithoutCategoryNestedInput } from "../inputs/BudgetUpdateManyWithoutCategoryNestedInput";
import { CategoryUpdateOneWithoutSubcategoriesNestedInput } from "../inputs/CategoryUpdateOneWithoutSubcategoriesNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutCategoryNestedInput } from "../inputs/TransactionUpdateManyWithoutCategoryNestedInput";
export declare class CategoryUpdateWithoutSubcategoriesInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    parentCategory?: CategoryUpdateOneWithoutSubcategoriesNestedInput | undefined;
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput | undefined;
    Budget?: BudgetUpdateManyWithoutCategoryNestedInput | undefined;
}
