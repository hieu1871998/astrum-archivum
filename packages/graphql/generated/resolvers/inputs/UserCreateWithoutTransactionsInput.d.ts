import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BudgetCreateNestedManyWithoutUserInput } from "../inputs/BudgetCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutTransactionsInput {
    id?: string | undefined;
    email: string;
    name?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    budgets?: BudgetCreateNestedManyWithoutUserInput | undefined;
}
