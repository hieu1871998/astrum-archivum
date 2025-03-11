import { TransactionCreateManyCategoryInputEnvelope } from "../inputs/TransactionCreateManyCategoryInputEnvelope";
import { TransactionCreateOrConnectWithoutCategoryInput } from "../inputs/TransactionCreateOrConnectWithoutCategoryInput";
import { TransactionCreateWithoutCategoryInput } from "../inputs/TransactionCreateWithoutCategoryInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutCategoryInput } from "../inputs/TransactionUpdateManyWithWhereWithoutCategoryInput";
import { TransactionUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutCategoryInput";
import { TransactionUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutCategoryInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutCategoryNestedInput {
    create?: TransactionCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;
    createMany?: TransactionCreateManyCategoryInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutCategoryInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
