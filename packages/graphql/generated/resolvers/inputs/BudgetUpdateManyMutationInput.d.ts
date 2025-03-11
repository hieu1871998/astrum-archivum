import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
export declare class BudgetUpdateManyMutationInput {
    periodStart?: DateTimeFieldUpdateOperationsInput | undefined;
    periodEnd?: DateTimeFieldUpdateOperationsInput | undefined;
    limit?: FloatFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
