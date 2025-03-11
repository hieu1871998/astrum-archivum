import { BudgetCreateManyUserInputEnvelope } from "../inputs/BudgetCreateManyUserInputEnvelope";
import { BudgetCreateOrConnectWithoutUserInput } from "../inputs/BudgetCreateOrConnectWithoutUserInput";
import { BudgetCreateWithoutUserInput } from "../inputs/BudgetCreateWithoutUserInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";
export declare class BudgetCreateNestedManyWithoutUserInput {
    create?: BudgetCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: BudgetCreateManyUserInputEnvelope | undefined;
    connect?: BudgetWhereUniqueInput[] | undefined;
}
