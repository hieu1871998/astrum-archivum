import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TransactionUpdateManyWithoutTagsNestedInput } from "../inputs/TransactionUpdateManyWithoutTagsNestedInput";
export declare class TagUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    transactions?: TransactionUpdateManyWithoutTagsNestedInput | undefined;
}
