import { BudgetOrderByWithAggregationInput } from "../../../inputs/BudgetOrderByWithAggregationInput";
import { BudgetScalarWhereWithAggregatesInput } from "../../../inputs/BudgetScalarWhereWithAggregatesInput";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";
export declare class GroupByBudgetArgs {
    where?: BudgetWhereInput | undefined;
    orderBy?: BudgetOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "categoryId" | "periodStart" | "periodEnd" | "limit" | "createdAt" | "updatedAt">;
    having?: BudgetScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
