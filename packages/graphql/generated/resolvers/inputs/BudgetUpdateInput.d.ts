import { CategoryUpdateOneRequiredWithoutBudgetNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutBudgetNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBudgetsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBudgetsNestedInput";
export declare class BudgetUpdateInput {
    periodStart?: DateTimeFieldUpdateOperationsInput | undefined;
    periodEnd?: DateTimeFieldUpdateOperationsInput | undefined;
    limit?: FloatFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutBudgetsNestedInput | undefined;
    category?: CategoryUpdateOneRequiredWithoutBudgetNestedInput | undefined;
}
