import { BudgetOrderByRelationAggregateInput } from "../inputs/BudgetOrderByRelationAggregateInput";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
export declare class CategoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    parentCategoryId?: "asc" | "desc" | undefined;
    parentCategory?: CategoryOrderByWithRelationInput | undefined;
    subcategories?: CategoryOrderByRelationAggregateInput | undefined;
    transactions?: TransactionOrderByRelationAggregateInput | undefined;
    Budget?: BudgetOrderByRelationAggregateInput | undefined;
}
