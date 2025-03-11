import { BudgetWhereInput } from "../inputs/BudgetWhereInput";
import { CategoryRelationFilter } from "../inputs/CategoryRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class BudgetWhereUniqueInput {
    id?: string | undefined;
    AND?: BudgetWhereInput[] | undefined;
    OR?: BudgetWhereInput[] | undefined;
    NOT?: BudgetWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    categoryId?: StringFilter | undefined;
    periodStart?: DateTimeFilter | undefined;
    periodEnd?: DateTimeFilter | undefined;
    limit?: FloatFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    user?: UserRelationFilter | undefined;
    category?: CategoryRelationFilter | undefined;
}
