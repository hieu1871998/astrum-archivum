import { CategoryCreateNestedOneWithoutBudgetInput } from "../inputs/CategoryCreateNestedOneWithoutBudgetInput";
import { UserCreateNestedOneWithoutBudgetsInput } from "../inputs/UserCreateNestedOneWithoutBudgetsInput";
export declare class BudgetCreateInput {
    id?: string | undefined;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutBudgetsInput;
    category: CategoryCreateNestedOneWithoutBudgetInput;
}
