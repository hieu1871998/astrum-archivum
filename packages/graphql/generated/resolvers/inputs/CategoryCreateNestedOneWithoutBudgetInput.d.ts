import { CategoryCreateOrConnectWithoutBudgetInput } from "../inputs/CategoryCreateOrConnectWithoutBudgetInput";
import { CategoryCreateWithoutBudgetInput } from "../inputs/CategoryCreateWithoutBudgetInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedOneWithoutBudgetInput {
    create?: CategoryCreateWithoutBudgetInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutBudgetInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
}
