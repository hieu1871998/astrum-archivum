import { Account } from "../models/Account";
import { Category } from "../models/Category";
import { Tag } from "../models/Tag";
import { User } from "../models/User";
import { TransactionCount } from "../resolvers/outputs/TransactionCount";
export declare class Transaction {
    id: string;
    account?: Account;
    accountId: string;
    user?: User;
    userId: string;
    amount: number;
    currency: "USD";
    type: "INCOME" | "EXPENSE" | "TRANSFER";
    description?: string | null;
    notes?: string | null;
    customIcon?: string | null;
    date: Date;
    recurrence: "OFF" | "REPEAT" | "INSTALLMENT";
    category?: Category | null;
    categoryId?: string | null;
    createdAt: Date;
    updatedAt: Date;
    tagIds: string[];
    tags?: Tag[];
    _count?: TransactionCount | null;
}
