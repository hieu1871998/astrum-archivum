import { CategoryCountBudgetArgs } from "./args/CategoryCountBudgetArgs";
import { CategoryCountSubcategoriesArgs } from "./args/CategoryCountSubcategoriesArgs";
import { CategoryCountTransactionsArgs } from "./args/CategoryCountTransactionsArgs";
export declare class CategoryCount {
    subcategories: number;
    transactions: number;
    Budget: number;
    getSubcategories(root: CategoryCount, args: CategoryCountSubcategoriesArgs): number;
    getTransactions(root: CategoryCount, args: CategoryCountTransactionsArgs): number;
    getBudget(root: CategoryCount, args: CategoryCountBudgetArgs): number;
}
