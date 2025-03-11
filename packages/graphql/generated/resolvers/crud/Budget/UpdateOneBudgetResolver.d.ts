import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneBudgetArgs } from "./args/UpdateOneBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class UpdateOneBudgetResolver {
    updateOneBudget(ctx: any, info: GraphQLResolveInfo, args: UpdateOneBudgetArgs): Promise<Budget | null>;
}
