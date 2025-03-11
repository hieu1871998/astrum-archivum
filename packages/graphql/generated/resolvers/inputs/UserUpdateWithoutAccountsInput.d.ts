import { BudgetUpdateManyWithoutUserNestedInput } from "../inputs/BudgetUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutUserNestedInput } from "../inputs/TransactionUpdateManyWithoutUserNestedInput";
export declare class UserUpdateWithoutAccountsInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    transactions?: TransactionUpdateManyWithoutUserNestedInput | undefined;
    budgets?: BudgetUpdateManyWithoutUserNestedInput | undefined;
}
