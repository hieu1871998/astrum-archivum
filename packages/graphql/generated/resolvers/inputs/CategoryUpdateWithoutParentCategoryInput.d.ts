import { BudgetUpdateManyWithoutCategoryNestedInput } from "../inputs/BudgetUpdateManyWithoutCategoryNestedInput";
import { CategoryUpdateManyWithoutParentCategoryNestedInput } from "../inputs/CategoryUpdateManyWithoutParentCategoryNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutCategoryNestedInput } from "../inputs/TransactionUpdateManyWithoutCategoryNestedInput";
export declare class CategoryUpdateWithoutParentCategoryInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    subcategories?: CategoryUpdateManyWithoutParentCategoryNestedInput | undefined;
    transactions?: TransactionUpdateManyWithoutCategoryNestedInput | undefined;
    Budget?: BudgetUpdateManyWithoutCategoryNestedInput | undefined;
}
