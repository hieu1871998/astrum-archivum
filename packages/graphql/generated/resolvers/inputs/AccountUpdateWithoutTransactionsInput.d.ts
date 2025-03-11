import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAccountTypeFieldUpdateOperationsInput } from "../inputs/EnumAccountTypeFieldUpdateOperationsInput";
import { EnumCurrencyFieldUpdateOperationsInput } from "../inputs/EnumCurrencyFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutAccountsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutAccountsNestedInput";
export declare class AccountUpdateWithoutTransactionsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumAccountTypeFieldUpdateOperationsInput | undefined;
    currency?: EnumCurrencyFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput | undefined;
}
