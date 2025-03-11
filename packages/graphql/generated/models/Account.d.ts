import { Transaction } from "../models/Transaction";
import { User } from "../models/User";
import { AccountCount } from "../resolvers/outputs/AccountCount";
export declare class Account {
    id: string;
    user?: User;
    userId: string;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt: Date;
    updatedAt: Date;
    transactions?: Transaction[];
    _count?: AccountCount | null;
}
