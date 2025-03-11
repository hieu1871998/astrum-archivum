import { BudgetAvgOrderByAggregateInput } from "../inputs/BudgetAvgOrderByAggregateInput";
import { BudgetCountOrderByAggregateInput } from "../inputs/BudgetCountOrderByAggregateInput";
import { BudgetMaxOrderByAggregateInput } from "../inputs/BudgetMaxOrderByAggregateInput";
import { BudgetMinOrderByAggregateInput } from "../inputs/BudgetMinOrderByAggregateInput";
import { BudgetSumOrderByAggregateInput } from "../inputs/BudgetSumOrderByAggregateInput";
export declare class BudgetOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    categoryId?: "asc" | "desc" | undefined;
    periodStart?: "asc" | "desc" | undefined;
    periodEnd?: "asc" | "desc" | undefined;
    limit?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BudgetCountOrderByAggregateInput | undefined;
    _avg?: BudgetAvgOrderByAggregateInput | undefined;
    _max?: BudgetMaxOrderByAggregateInput | undefined;
    _min?: BudgetMinOrderByAggregateInput | undefined;
    _sum?: BudgetSumOrderByAggregateInput | undefined;
}
