import { TransactionCreateManyAccountInputEnvelope } from "../inputs/TransactionCreateManyAccountInputEnvelope";
import { TransactionCreateOrConnectWithoutAccountInput } from "../inputs/TransactionCreateOrConnectWithoutAccountInput";
import { TransactionCreateWithoutAccountInput } from "../inputs/TransactionCreateWithoutAccountInput";
import { TransactionScalarWhereInput } from "../inputs/TransactionScalarWhereInput";
import { TransactionUpdateManyWithWhereWithoutAccountInput } from "../inputs/TransactionUpdateManyWithWhereWithoutAccountInput";
import { TransactionUpdateWithWhereUniqueWithoutAccountInput } from "../inputs/TransactionUpdateWithWhereUniqueWithoutAccountInput";
import { TransactionUpsertWithWhereUniqueWithoutAccountInput } from "../inputs/TransactionUpsertWithWhereUniqueWithoutAccountInput";
import { TransactionWhereUniqueInput } from "../inputs/TransactionWhereUniqueInput";
export declare class TransactionUpdateManyWithoutAccountNestedInput {
    create?: TransactionCreateWithoutAccountInput[] | undefined;
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput[] | undefined;
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput[] | undefined;
    createMany?: TransactionCreateManyAccountInputEnvelope | undefined;
    set?: TransactionWhereUniqueInput[] | undefined;
    disconnect?: TransactionWhereUniqueInput[] | undefined;
    delete?: TransactionWhereUniqueInput[] | undefined;
    connect?: TransactionWhereUniqueInput[] | undefined;
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput[] | undefined;
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput[] | undefined;
    deleteMany?: TransactionScalarWhereInput[] | undefined;
}
