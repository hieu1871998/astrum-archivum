import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { BudgetOrderByRelationAggregateInput } from "../inputs/BudgetOrderByRelationAggregateInput";
import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    transactions?: TransactionOrderByRelationAggregateInput | undefined;
    budgets?: BudgetOrderByRelationAggregateInput | undefined;
}
