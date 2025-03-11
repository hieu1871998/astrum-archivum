import { AccountUpdateOneRequiredWithoutTransactionsNestedInput } from "../inputs/AccountUpdateOneRequiredWithoutTransactionsNestedInput";
import { CategoryUpdateOneWithoutTransactionsNestedInput } from "../inputs/CategoryUpdateOneWithoutTransactionsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { EnumRecurrenceTypeFieldUpdateOperationsInput } from "../inputs/EnumRecurrenceTypeFieldUpdateOperationsInput";
import { EnumTransactionTypeFieldUpdateOperationsInput } from "../inputs/EnumTransactionTypeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TagUpdateManyWithoutTransactionsNestedInput } from "../inputs/TagUpdateManyWithoutTransactionsNestedInput";
export declare class TransactionUpdateWithoutUserInput {
    amount?: FloatFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    type?: EnumTransactionTypeFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    notes?: NullableStringFieldUpdateOperationsInput | undefined;
    customIcon?: NullableStringFieldUpdateOperationsInput | undefined;
    date?: DateTimeFieldUpdateOperationsInput | undefined;
    recurrence?: EnumRecurrenceTypeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    account?: AccountUpdateOneRequiredWithoutTransactionsNestedInput | undefined;
    category?: CategoryUpdateOneWithoutTransactionsNestedInput | undefined;
    tags?: TagUpdateManyWithoutTransactionsNestedInput | undefined;
}
