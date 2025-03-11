import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class BudgetScalarWhereWithAggregatesInput {
    AND?: BudgetScalarWhereWithAggregatesInput[] | undefined;
    OR?: BudgetScalarWhereWithAggregatesInput[] | undefined;
    NOT?: BudgetScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    categoryId?: StringWithAggregatesFilter | undefined;
    periodStart?: DateTimeWithAggregatesFilter | undefined;
    periodEnd?: DateTimeWithAggregatesFilter | undefined;
    limit?: FloatWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
