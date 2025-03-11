import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneBudgetArgs } from "./args/DeleteOneBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class DeleteOneBudgetResolver {
    deleteOneBudget(ctx: any, info: GraphQLResolveInfo, args: DeleteOneBudgetArgs): Promise<Budget | null>;
}
