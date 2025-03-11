export declare class BudgetCreateManyInput {
    id?: string | undefined;
    userId: string;
    categoryId: string;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
