import { TransactionCreateManyAccountInputEnvelope } from "../inputs/TransactionCreateManyAccountInputEnvelope";
import { TransactionCreateOrConnectWithoutAccountInput } from "../inputs/TransactionCreateOrConnectWithoutAccountInput";
import { TransactionCreateWithoutAccountInput } from "../inputs/TransactionCreateWithoutAccountInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionCreateNestedManyWithoutAccountInput {
    create?: TransactionCreateWithoutAccountInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput[] | undefined;
    createMany?: TransactionCreateManyAccountInputEnvelope | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
}
