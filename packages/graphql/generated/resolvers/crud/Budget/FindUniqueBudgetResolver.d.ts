import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueBudgetArgs } from "./args/FindUniqueBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class FindUniqueBudgetResolver {
    budget(ctx: any, info: GraphQLResolveInfo, args: FindUniqueBudgetArgs): Promise<Budget | null>;
}
