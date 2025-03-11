import type { GraphQLResolveInfo } from "graphql";
import { Budget } from "../../../models/Budget";
import { Category } from "../../../models/Category";
import { Transaction } from "../../../models/Transaction";
import { CategoryBudgetArgs } from "./args/CategoryBudgetArgs";
import { CategoryParentCategoryArgs } from "./args/CategoryParentCategoryArgs";
import { CategorySubcategoriesArgs } from "./args/CategorySubcategoriesArgs";
import { CategoryTransactionsArgs } from "./args/CategoryTransactionsArgs";
export declare class CategoryRelationsResolver {
    parentCategory(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryParentCategoryArgs): Promise<Category | null>;
    subcategories(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategorySubcategoriesArgs): Promise<Category[]>;
    transactions(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryTransactionsArgs): Promise<Transaction[]>;
    Budget(category: Category, ctx: any, info: GraphQLResolveInfo, args: CategoryBudgetArgs): Promise<Budget[]>;
}
