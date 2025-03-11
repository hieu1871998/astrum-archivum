import { BudgetCreateInput } from "../../../inputs/BudgetCreateInput";
import { BudgetUpdateInput } from "../../../inputs/BudgetUpdateInput";
import { BudgetWhereUniqueInput } from "../../../inputs/BudgetWhereUniqueInput";
export declare class UpsertOneBudgetArgs {
    where: BudgetWhereUniqueInput;
    create: BudgetCreateInput;
    update: BudgetUpdateInput;
}
