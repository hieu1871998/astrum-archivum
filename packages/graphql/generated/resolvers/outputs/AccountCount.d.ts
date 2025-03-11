import { AccountCountTransactionsArgs } from "./args/AccountCountTransactionsArgs";
export declare class AccountCount {
    transactions: number;
    getTransactions(root: AccountCount, args: AccountCountTransactionsArgs): number;
}
