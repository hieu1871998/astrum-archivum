import { Transaction } from "../models/Transaction";
import { TagCount } from "../resolvers/outputs/TagCount";
export declare class Tag {
    id: string;
    name: string;
    transactions?: Transaction[];
    transactionIds: string[];
    _count?: TagCount | null;
}
