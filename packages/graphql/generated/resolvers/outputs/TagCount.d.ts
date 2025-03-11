import { TagCountTransactionsArgs } from "./args/TagCountTransactionsArgs";
export declare class TagCount {
    transactions: number;
    getTransactions(root: TagCount, args: TagCountTransactionsArgs): number;
}
