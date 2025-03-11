import { AccountCreateWithoutTransactionsInput } from "../inputs/AccountCreateWithoutTransactionsInput";
import { AccountUpdateWithoutTransactionsInput } from "../inputs/AccountUpdateWithoutTransactionsInput";
import { AccountWhereInput } from "../inputs/AccountWhereInput";
export declare class AccountUpsertWithoutTransactionsInput {
    update: AccountUpdateWithoutTransactionsInput;
    create: AccountCreateWithoutTransactionsInput;
    where?: AccountWhereInput | undefined;
}
