import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBudgetOrThrowArgs } from "./args/FindUniqueBudgetOrThrowArgs";
import { Budget } from "../../../models/Budget";
export declare class FindUniqueBudgetOrThrowResolver {
    getBudget(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBudgetOrThrowArgs): Promise<Budget | null>;
}
