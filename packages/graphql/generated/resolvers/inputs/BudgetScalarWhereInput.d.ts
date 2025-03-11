import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class BudgetScalarWhereInput {
    AND?: BudgetScalarWhereInput[] | undefined;
    OR?: BudgetScalarWhereInput[] | undefined;
    NOT?: BudgetScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    categoryId?: StringFilter | undefined;
    periodStart?: DateTimeFilter | undefined;
    periodEnd?: DateTimeFilter | undefined;
    limit?: FloatFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
