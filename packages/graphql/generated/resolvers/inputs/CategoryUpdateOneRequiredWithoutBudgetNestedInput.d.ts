import { CategoryCreateOrConnectWithoutBudgetInput } from "../inputs/CategoryCreateOrConnectWithoutBudgetInput";
import { CategoryCreateWithoutBudgetInput } from "../inputs/CategoryCreateWithoutBudgetInput";
import { CategoryUpdateToOneWithWhereWithoutBudgetInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutBudgetInput";
import { CategoryUpsertWithoutBudgetInput } from "../inputs/CategoryUpsertWithoutBudgetInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneRequiredWithoutBudgetNestedInput {
    create?: CategoryCreateWithoutBudgetInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetInput | undefined;
    upsert?: CategoryUpsertWithoutBudgetInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutBudgetInput | undefined;
}
