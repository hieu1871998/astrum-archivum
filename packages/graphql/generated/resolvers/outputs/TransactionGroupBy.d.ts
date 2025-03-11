import { TransactionAvgAggregate } from "../outputs/TransactionAvgAggregate";
import { TransactionCountAggregate } from "../outputs/TransactionCountAggregate";
import { TransactionMaxAggregate } from "../outputs/TransactionMaxAggregate";
import { TransactionMinAggregate } from "../outputs/TransactionMinAggregate";
import { TransactionSumAggregate } from "../outputs/TransactionSumAggregate";
export declare class TransactionGroupBy {
    id: string;
    accountId: string;
    userId: string;
    amount: number;
    currency: "USD";
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    description: string | null;
    notes: string | null;
    customIcon: string | null;
    date: Date;
    recurrence: "OFF" | "REPEAT" | "INSTALLMENT";
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    tagIds: string[] | null;
    _count: TransactionCountAggregate | null;
    _avg: TransactionAvgAggregate | null;
    _sum: TransactionSumAggregate | null;
    _min: TransactionMinAggregate | null;
    _max: TransactionMaxAggregate | null;
}
