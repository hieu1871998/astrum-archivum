import { BudgetCreateManyUserInputEnvelope } from "../inputs/BudgetCreateManyUserInputEnvelope";
import { BudgetCreateOrConnectWithoutUserInput } from "../inputs/BudgetCreateOrConnectWithoutUserInput";
import { BudgetCreateWithoutUserInput } from "../inputs/BudgetCreateWithoutUserInput";
import { BudgetScalarWhereInput } from "../inputs/BudgetScalarWhereInput";
import { BudgetUpdateManyWithWhereWithoutUserInput } from "../inputs/BudgetUpdateManyWithWhereWithoutUserInput";
import { BudgetUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BudgetUpdateWithWhereUniqueWithoutUserInput";
import { BudgetUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BudgetUpsertWithWhereUniqueWithoutUserInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";
export declare class BudgetUpdateManyWithoutUserNestedInput {
    create?: BudgetCreateWithoutUserInput[] | undefined;
    connectOrCreate?: BudgetCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: BudgetUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: BudgetCreateManyUserInputEnvelope | undefined;
    set?: BudgetWhereUniqueInput[] | undefined;
    disconnect?: BudgetWhereUniqueInput[] | undefined;
    delete?: BudgetWhereUniqueInput[] | undefined;
    connect?: BudgetWhereUniqueInput[] | undefined;
    update?: BudgetUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: BudgetUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: BudgetScalarWhereInput[] | undefined;
}
