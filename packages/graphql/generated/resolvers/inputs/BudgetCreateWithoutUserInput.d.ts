import { CategoryCreateNestedOneWithoutBudgetInput } from "../inputs/CategoryCreateNestedOneWithoutBudgetInput";
export declare class BudgetCreateWithoutUserInput {
    id?: string | undefined;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    category: CategoryCreateNestedOneWithoutBudgetInput;
}
