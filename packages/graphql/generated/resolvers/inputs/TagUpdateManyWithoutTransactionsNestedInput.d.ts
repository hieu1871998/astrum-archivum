import { TagCreateOrConnectWithoutTransactionsInput } from "../inputs/TagCreateOrConnectWithoutTransactionsInput";
import { TagCreateWithoutTransactionsInput } from "../inputs/TagCreateWithoutTransactionsInput";
import { TagScalarWhereInput } from "../inputs/TagScalarWhereInput";
import { TagUpdateManyWithWhereWithoutTransactionsInput } from "../inputs/TagUpdateManyWithWhereWithoutTransactionsInput";
import { TagUpdateWithWhereUniqueWithoutTransactionsInput } from "../inputs/TagUpdateWithWhereUniqueWithoutTransactionsInput";
import { TagUpsertWithWhereUniqueWithoutTransactionsInput } from "../inputs/TagUpsertWithWhereUniqueWithoutTransactionsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagUpdateManyWithoutTransactionsNestedInput {
    create?: TagCreateWithoutTransactionsInput[] | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTransactionsInput[] | undefined;
    upsert?: TagUpsertWithWhereUniqueWithoutTransactionsInput[] | undefined;
    set?: TagWhereUniqueInput[] | undefined;
    disconnect?: TagWhereUniqueInput[] | undefined;
    delete?: TagWhereUniqueInput[] | undefined;
    connect?: TagWhereUniqueInput[] | undefined;
    update?: TagUpdateWithWhereUniqueWithoutTransactionsInput[] | undefined;
    updateMany?: TagUpdateManyWithWhereWithoutTransactionsInput[] | undefined;
    deleteMany?: TagScalarWhereInput[] | undefined;
}
