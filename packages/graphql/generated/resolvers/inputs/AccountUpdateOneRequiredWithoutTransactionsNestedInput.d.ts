import { AccountCreateOrConnectWithoutTransactionsInput } from "../inputs/AccountCreateOrConnectWithoutTransactionsInput";
import { AccountCreateWithoutTransactionsInput } from "../inputs/AccountCreateWithoutTransactionsInput";
import { AccountUpdateToOneWithWhereWithoutTransactionsInput } from "../inputs/AccountUpdateToOneWithWhereWithoutTransactionsInput";
import { AccountUpsertWithoutTransactionsInput } from "../inputs/AccountUpsertWithoutTransactionsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";
export declare class AccountUpdateOneRequiredWithoutTransactionsNestedInput {
    create?: AccountCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: AccountUpsertWithoutTransactionsInput | undefined;
    connect?: AccountWhereUniqueInput | undefined;
    update?: AccountUpdateToOneWithWhereWithoutTransactionsInput | undefined;
}
