import { UserCreateOrConnectWithoutTransactionsInput } from "../inputs/UserCreateOrConnectWithoutTransactionsInput";
import { UserCreateWithoutTransactionsInput } from "../inputs/UserCreateWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTransactionsInput {
    create?: UserCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
