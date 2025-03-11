import { CategoryCreateManyParentCategoryInputEnvelope } from "../inputs/CategoryCreateManyParentCategoryInputEnvelope";
import { CategoryCreateOrConnectWithoutParentCategoryInput } from "../inputs/CategoryCreateOrConnectWithoutParentCategoryInput";
import { CategoryCreateWithoutParentCategoryInput } from "../inputs/CategoryCreateWithoutParentCategoryInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutParentCategoryInput } from "../inputs/CategoryUpdateManyWithWhereWithoutParentCategoryInput";
import { CategoryUpdateWithWhereUniqueWithoutParentCategoryInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutParentCategoryInput";
import { CategoryUpsertWithWhereUniqueWithoutParentCategoryInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutParentCategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateManyWithoutParentCategoryNestedInput {
    create?: CategoryCreateWithoutParentCategoryInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput[] | undefined;
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentCategoryInput[] | undefined;
    createMany?: CategoryCreateManyParentCategoryInputEnvelope | undefined;
    set?: CategoryWhereUniqueInput[] | undefined;
    disconnect?: CategoryWhereUniqueInput[] | undefined;
    delete?: CategoryWhereUniqueInput[] | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
    update?: CategoryUpdateWithWhereUniqueWithoutParentCategoryInput[] | undefined;
    updateMany?: CategoryUpdateManyWithWhereWithoutParentCategoryInput[] | undefined;
    deleteMany?: CategoryScalarWhereInput[] | undefined;
}
