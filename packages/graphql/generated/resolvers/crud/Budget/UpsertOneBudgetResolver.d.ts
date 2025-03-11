import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneBudgetArgs } from "./args/UpsertOneBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class UpsertOneBudgetResolver {
    upsertOneBudget(ctx: any, info: GraphQLResolveInfo, args: UpsertOneBudgetArgs): Promise<Budget>;
}
