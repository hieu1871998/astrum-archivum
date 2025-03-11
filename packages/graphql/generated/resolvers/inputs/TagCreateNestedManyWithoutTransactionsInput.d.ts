import { TagCreateOrConnectWithoutTransactionsInput } from "../inputs/TagCreateOrConnectWithoutTransactionsInput";
import { TagCreateWithoutTransactionsInput } from "../inputs/TagCreateWithoutTransactionsInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";
export declare class TagCreateNestedManyWithoutTransactionsInput {
    create?: TagCreateWithoutTransactionsInput[] | undefined;
    connectOrCreate?: TagCreateOrConnectWithoutTransactionsInput[] | undefined;
    connect?: TagWhereUniqueInput[] | undefined;
}
