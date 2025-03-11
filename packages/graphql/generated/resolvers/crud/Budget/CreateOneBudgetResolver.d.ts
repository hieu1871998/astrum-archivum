import type { GraphQLResolveInfo } from "graphql";
import { CreateOneBudgetArgs } from "./args/CreateOneBudgetArgs";
import { Budget } from "../../../models/Budget";
export declare class CreateOneBudgetResolver {
    createOneBudget(ctx: any, info: GraphQLResolveInfo, args: CreateOneBudgetArgs): Promise<Budget>;
}
