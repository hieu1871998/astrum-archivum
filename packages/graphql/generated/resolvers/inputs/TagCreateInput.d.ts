import { TransactionCreateNestedManyWithoutTagsInput } from "../inputs/TransactionCreateNestedManyWithoutTagsInput";
export declare class TagCreateInput {
    id?: string | undefined;
    name: string;
    transactions?: TransactionCreateNestedManyWithoutTagsInput | undefined;
}
