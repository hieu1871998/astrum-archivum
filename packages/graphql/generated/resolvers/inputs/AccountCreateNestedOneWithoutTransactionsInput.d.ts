import { AccountCreateOrConnectWithoutTransactionsInput } from "../inputs/AccountCreateOrConnectWithoutTransactionsInput";
import { AccountCreateWithoutTransactionsInput } from "../inputs/AccountCreateWithoutTransactionsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountCreateNestedOneWithoutTransactionsInput {
    create?: AccountCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: AccountWhereUniqueInput | undefined;
}
