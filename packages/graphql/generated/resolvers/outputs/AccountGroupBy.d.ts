import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
export declare class AccountGroupBy {
    id: string;
    userId: string;
    name: string;
    type: "BANK" | "CREDIT" | "WALLET";
    currency: "USD";
    createdAt: Date;
    updatedAt: Date;
    _count: AccountCountAggregate | null;
    _min: AccountMinAggregate | null;
    _max: AccountMaxAggregate | null;
}
