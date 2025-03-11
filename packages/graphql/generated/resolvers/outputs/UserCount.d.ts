import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountBudgetsArgs } from "./args/UserCountBudgetsArgs";
import { UserCountTransactionsArgs } from "./args/UserCountTransactionsArgs";
export declare class UserCount {
    accounts: number;
    transactions: number;
    budgets: number;
    getAccounts(root: UserCount, args: UserCountAccountsArgs): number;
    getTransactions(root: UserCount, args: UserCountTransactionsArgs): number;
    getBudgets(root: UserCount, args: UserCountBudgetsArgs): number;
}
