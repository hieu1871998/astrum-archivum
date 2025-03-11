import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { BudgetCreateNestedManyWithoutUserInput } from "../inputs/BudgetCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    email: string;
    name?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    transactions?: TransactionCreateNestedManyWithoutUserInput | undefined;
    budgets?: BudgetCreateNestedManyWithoutUserInput | undefined;
}
