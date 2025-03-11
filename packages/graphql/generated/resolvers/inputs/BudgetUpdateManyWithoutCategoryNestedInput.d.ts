import { BudgetCreateManyCategoryInputEnvelope } from "../inputs/BudgetCreateManyCategoryInputEnvelope";
import { BudgetCreateOrConnectWithoutCategoryInput } from "../inputs/BudgetCreateOrConnectWithoutCategoryInput";
import { BudgetCreateWithoutCategoryInput } from "../inputs/BudgetCreateWithoutCategoryInput";
import { BudgetScalarWhereInput } from "../inputs/BudgetScalarWhereInput";
import { BudgetUpdateManyWithWhereWithoutCategoryInput } from "../inputs/BudgetUpdateManyWithWhereWithoutCategoryInput";
import { BudgetUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/BudgetUpdateWithWhereUniqueWithoutCategoryInput";
import { BudgetUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/BudgetUpsertWithWhereUniqueWithoutCategoryInput";
import { BudgetWhereUniqueInput } from "../inputs/BudgetWhereUniqueInput";
export declare class BudgetUpdateManyWithoutCategoryNestedInput {
    create?: BudgetCreateWithoutCategoryInput[] | undefined;
    connectOrCreate?: BudgetCreateOrConnectWithoutCategoryInput[] | undefined;
    upsert?: BudgetUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;
    createMany?: BudgetCreateManyCategoryInputEnvelope | undefined;
    set?: BudgetWhereUniqueInput[] | undefined;
    disconnect?: BudgetWhereUniqueInput[] | undefined;
    delete?: BudgetWhereUniqueInput[] | undefined;
    connect?: BudgetWhereUniqueInput[] | undefined;
    update?: BudgetUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;
    updateMany?: BudgetUpdateManyWithWhereWithoutCategoryInput[] | undefined;
    deleteMany?: BudgetScalarWhereInput[] | undefined;
}
