import { CategoryCreateWithoutBudgetInput } from "../inputs/CategoryCreateWithoutBudgetInput";
import { CategoryUpdateWithoutBudgetInput } from "../inputs/CategoryUpdateWithoutBudgetInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
export declare class CategoryUpsertWithoutBudgetInput {
    update: CategoryUpdateWithoutBudgetInput;
    create: CategoryCreateWithoutBudgetInput;
    where?: CategoryWhereInput | undefined;
}
