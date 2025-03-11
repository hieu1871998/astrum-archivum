import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyBudgetArgs } from "./args/UpdateManyBudgetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyBudgetResolver {
    updateManyBudget(ctx: any, info: GraphQLResolveInfo, args: UpdateManyBudgetArgs): Promise<AffectedRowsOutput>;
}
