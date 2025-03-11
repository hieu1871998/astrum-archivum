import { BudgetCreateNestedManyWithoutUserInput } from "../inputs/BudgetCreateNestedManyWithoutUserInput";
import { TransactionCreateNestedManyWithoutUserInput } from "../inputs/TransactionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    email: string;
    name?: string | undefined;
    password: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    transactions?: TransactionCreateNestedManyWithoutUserInput | undefined;
    budgets?: BudgetCreateNestedManyWithoutUserInput | undefined;
}
