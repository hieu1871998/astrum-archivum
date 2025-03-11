import { BudgetOrderByWithRelationInput } from "../../../inputs/BudgetOrderByWithRelationInput";
import { BudgetWhereInput } from "../../../inputs/BudgetWhereInput";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";
export declare class AggregateBudgetArgs {
    where?: BudgetWhereInput | undefined;
    orderBy?: BudgetOrderByWithRelationInput[] | undefined;
    cursor?: BudgetWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
