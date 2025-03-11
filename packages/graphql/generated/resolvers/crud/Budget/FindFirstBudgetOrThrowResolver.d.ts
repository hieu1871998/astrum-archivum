import type { GraphQLResolveInfo } from "graphql";
import { FindFirstBudgetOrThrowArgs } from "./args/FindFirstBudgetOrThrowArgs";
import { Budget } from "../../../models/Budget";
export declare class FindFirstBudgetOrThrowResolver {
    findFirstBudgetOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstBudgetOrThrowArgs): Promise<Budget | null>;
}
