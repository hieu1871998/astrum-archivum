import { Budget } from "../models/Budget";
import { Transaction } from "../models/Transaction";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";
export declare class Category {
    id: string;
    name: string;
    icon?: string | null;
    color?: string | null;
    parentCategory?: Category | null;
    parentCategoryId?: string | null;
    subcategories?: Category[];
    transactions?: Transaction[];
    Budget?: Budget[];
    _count?: CategoryCount | null;
}
