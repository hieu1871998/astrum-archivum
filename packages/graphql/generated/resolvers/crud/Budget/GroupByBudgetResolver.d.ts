import type { GraphQLResolveInfo } from "graphql";
import { GroupByBudgetArgs } from "./args/GroupByBudgetArgs";
import { BudgetGroupBy } from "../../outputs/BudgetGroupBy";
export declare class GroupByBudgetResolver {
    groupByBudget(ctx: any, info: GraphQLResolveInfo, args: GroupByBudgetArgs): Promise<BudgetGroupBy[]>;
}
