import { UserCreateOrConnectWithoutTransactionsInput } from "../inputs/UserCreateOrConnectWithoutTransactionsInput";
import { UserCreateWithoutTransactionsInput } from "../inputs/UserCreateWithoutTransactionsInput";
import { UserUpdateToOneWithWhereWithoutTransactionsInput } from "../inputs/UserUpdateToOneWithWhereWithoutTransactionsInput";
import { UserUpsertWithoutTransactionsInput } from "../inputs/UserUpsertWithoutTransactionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: UserCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: UserUpsertWithoutTransactionsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutTransactionsInput | undefined;
}
