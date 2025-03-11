import type { GraphQLResolveInfo } from "graphql";
import { Budget } from "../../../models/Budget";
import { Category } from "../../../models/Category";
import { User } from "../../../models/User";
export declare class BudgetRelationsResolver {
    user(budget: Budget, ctx: any, info: GraphQLResolveInfo): Promise<User>;
    category(budget: Budget, ctx: any, info: GraphQLResolveInfo): Promise<Category>;
}
