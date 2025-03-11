import { CategoryOrderByWithRelationInput } from "../inputs/CategoryOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class BudgetOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    categoryId?: "asc" | "desc" | undefined;
    periodStart?: "asc" | "desc" | undefined;
    periodEnd?: "asc" | "desc" | undefined;
    limit?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    category?: CategoryOrderByWithRelationInput | undefined;
}
