import { TransactionOrderByRelationAggregateInput } from "../inputs/TransactionOrderByRelationAggregateInput";
export declare class TagOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    transactionIds?: "asc" | "desc" | undefined;
    transactions?: TransactionOrderByRelationAggregateInput | undefined;
}
