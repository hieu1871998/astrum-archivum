import { TransactionOrderByWithRelationInput } from "../../../inputs/TransactionOrderByWithRelationInput";
import { TransactionWhereInput } from "../../../inputs/TransactionWhereInput";
import { TransactionWhereUniqueInput } from "../../../inputs/TransactionWhereUniqueInput";
export declare class UserTransactionsArgs {
    where?: TransactionWhereInput | undefined;
    orderBy?: TransactionOrderByWithRelationInput[] | undefined;
    cursor?: TransactionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "accountId" | "userId" | "amount" | "currency" | "type" | "description" | "notes" | "customIcon" | "date" | "recurrence" | "categoryId" | "createdAt" | "updatedAt" | "tagIds"> | undefined;
}
