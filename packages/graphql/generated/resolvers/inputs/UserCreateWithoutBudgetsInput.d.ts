import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutBudgetsInput {
    id?: string | undefined;
    email: string;
    name?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    transactions?: TransactionCreateNestedManyWithoutUserInput | undefined;
}
