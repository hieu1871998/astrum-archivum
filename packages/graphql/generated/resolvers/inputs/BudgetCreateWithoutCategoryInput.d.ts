import { UserCreateNestedOneWithoutBudgetsInput } from "../inputs/UserCreateNestedOneWithoutBudgetsInput";
export declare class BudgetCreateWithoutCategoryInput {
    id?: string | undefined;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user: UserCreateNestedOneWithoutBudgetsInput;
}
