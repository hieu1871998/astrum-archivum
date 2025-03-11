import { BudgetCreateManyCategoryInputEnvelope } from "../inputs/BudgetCreateManyCategoryInputEnvelope";
import { BudgetCreateOrConnectWithoutCategoryInput } from "../inputs/BudgetCreateOrConnectWithoutCategoryInput";
import { BudgetCreateWithoutCategoryInput } from "../inputs/BudgetCreateWithoutCategoryInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";
export declare class BudgetCreateNestedManyWithoutCategoryInput {
    create?: BudgetCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput[] | undefined;
    createMany?: BudgetCreateManyCategoryInputEnvelope | undefined;
    connect?: BudgetWhereUniqueInput[] | undefined;
}
