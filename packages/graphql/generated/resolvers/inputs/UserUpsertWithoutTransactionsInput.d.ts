import { UserCreateWithoutTransactionsInput } from "../inputs/UserCreateWithoutTransactionsInput";
import { UserUpdateWithoutTransactionsInput } from "../inputs/UserUpdateWithoutTransactionsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutTransactionsInput {
    update: UserUpdateWithoutTransactionsInput;
    create: UserCreateWithoutTransactionsInput;
    where?: UserWhereInput | undefined;
}
