import { TransactionCreateOrConnectWithoutTagsInput } from "../inputs/TransactionCreateOrConnectWithoutTagsInput";
import { TransactionCreateWithoutTagsInput } from "../inputs/TransactionCreateWithoutTagsInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutTagsInput {
    create?: TransactionCreateWithoutTagsInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutTagsInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
