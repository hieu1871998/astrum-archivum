import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBudgetArgs } from "./args/FindFirstBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class FindFirstBudgetResolver {
    findFirstBudget(ctx: any, info: GraphQLResolveInfo, args: FindFirstBudgetArgs): Promise<Budget | null>;
}
