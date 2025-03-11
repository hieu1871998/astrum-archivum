import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyBudgetArgs } from "./args/DeleteManyBudgetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyBudgetResolver {
    deleteManyBudget(ctx: any, info: GraphQLResolveInfo, args: DeleteManyBudgetArgs): Promise<AffectedRowsOutput>;
}
