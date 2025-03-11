import { Account } from "../models/Account";
import { Budget } from "../models/Budget";
import { Transaction } from "../models/Transaction";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    email: string;
    name?: string | null;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    accounts?: Account[];
    transactions?: Transaction[];
    budgets?: Budget[];
    _count?: UserCount | null;
}
