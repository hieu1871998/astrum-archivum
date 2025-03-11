import { AccountOrderByWithAggregationInput } from "../../../inputs/AccountOrderByWithAggregationInput";
import { AccountScalarWhereWithAggregatesInput } from "../../../inputs/AccountScalarWhereWithAggregatesInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
export declare class GroupByAccountArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "userId" | "name" | "type" | "currency" | "createdAt" | "updatedAt">;
    having?: AccountScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
