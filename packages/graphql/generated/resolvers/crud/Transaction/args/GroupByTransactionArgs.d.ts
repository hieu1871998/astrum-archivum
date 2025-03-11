import { TransactionOrderByWithAggregationInput } from "../../../inputs/TransactionOrderByWithAggregationInput";
import { TransactionScalarWhereWithAggregatesInput } from "../../../inputs/TransactionScalarWhereWithAggregatesInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
export declare class GroupByTransactionArgs {
    where?: TransactionWhereInput | undefined;
    orderBy?: TransactionOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "accountId" | "userId" | "amount" | "currency" | "type" | "description" | "notes" | "customIcon" | "date" | "recurrence" | "categoryId" | "createdAt" | "updatedAt" | "tagIds">;
    having?: TransactionScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
