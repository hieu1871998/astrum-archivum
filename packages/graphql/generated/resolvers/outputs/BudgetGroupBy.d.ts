import { BudgetAvgAggregate } from "../outputs/BudgetAvgAggregate";
import { BudgetCountAggregate } from "../outputs/BudgetCountAggregate";
import { BudgetMaxAggregate } from "../outputs/BudgetMaxAggregate";
import { BudgetMinAggregate } from "../outputs/BudgetMinAggregate";
import { BudgetSumAggregate } from "../outputs/BudgetSumAggregate";
export declare class BudgetGroupBy {
    id: string;
    userId: string;
    categoryId: string;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt: Date;
    updatedAt: Date;
    _count: BudgetCountAggregate | null;
    _avg: BudgetAvgAggregate | null;
    _sum: BudgetSumAggregate | null;
    _min: BudgetMinAggregate | null;
    _max: BudgetMaxAggregate | null;
}
