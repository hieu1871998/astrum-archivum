import { TransactionCreateOrConnectWithoutTagsInput } from "../inputs/TransactionCreateOrConnectWithoutTagsInput";
import { TransactionCreateWithoutTagsInput } from "../inputs/TransactionCreateWithoutTagsInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutTagsInput } from "../inputs/TransactionUpdateManyWithWhereWithoutTagsInput";
import { TransactionUpdateWithWhereUniqueWithoutTagsInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutTagsInput";
import { TransactionUpsertWithWhereUniqueWithoutTagsInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutTagsInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutTagsNestedInput {
    create?: TransactionCreateWithoutTagsInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutTagsInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutTagsInput[] | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutTagsInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutTagsInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
