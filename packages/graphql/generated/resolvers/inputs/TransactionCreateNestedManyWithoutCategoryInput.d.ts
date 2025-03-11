import { TransactionCreateManyCategoryInputEnvelope } from "../inputs/TransactionCreateManyCategoryInputEnvelope";
import { TransactionCreateOrConnectWithoutCategoryInput } from "../inputs/TransactionCreateOrConnectWithoutCategoryInput";
import { TransactionCreateWithoutCategoryInput } from "../inputs/TransactionCreateWithoutCategoryInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutCategoryInput {
    create?: TransactionCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutCategoryInput[] | undefined;
    createMany?: TransactionCreateManyCategoryInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
