import type { GraphQLResolveInfo } from "graphql";
import { FindManyBudgetArgs } from "./args/FindManyBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class FindManyBudgetResolver {
    budgets(ctx: any, info: GraphQLResolveInfo, args: FindManyBudgetArgs): Promise<Budget[]>;
}
