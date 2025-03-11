import type { GraphQLResolveInfo } from "graphql";
import { CreateManyBudgetArgs } from "./args/CreateManyBudgetArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyBudgetResolver {
    createManyBudget(ctx: any, info: GraphQLResolveInfo, args: CreateManyBudgetArgs): Promise<AffectedRowsOutput>;
}
