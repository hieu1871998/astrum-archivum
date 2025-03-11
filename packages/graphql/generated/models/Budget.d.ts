import { Category } from "../models/Category";
import { User } from "../models/User";
export declare class Budget {
    id: string;
    user?: User;
    userId: string;
    category?: Category;
    categoryId: string;
    periodStart: Date;
    periodEnd: Date;
    limit: number;
    createdAt: Date;
    updatedAt: Date;
}
