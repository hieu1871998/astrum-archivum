import type { GraphQLResolveInfo } from "graphql";
import { AggregateBudgetArgs } from "./args/AggregateBudgetArgs";
import { AggregateBudget } from "../../outputs/AggregateBudget";
export declare class AggregateBudgetResolver {
    aggregateBudget(ctx: any, info: GraphQLResolveInfo, args: AggregateBudgetArgs): Promise<AggregateBudget>;
}
