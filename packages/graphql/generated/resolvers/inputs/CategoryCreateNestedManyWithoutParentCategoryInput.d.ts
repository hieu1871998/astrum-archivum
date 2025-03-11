import { CategoryCreateManyParentCategoryInputEnvelope } from "../inputs/CategoryCreateManyParentCategoryInputEnvelope";
import { CategoryCreateOrConnectWithoutParentCategoryInput } from "../inputs/CategoryCreateOrConnectWithoutParentCategoryInput";
import { CategoryCreateWithoutParentCategoryInput } from "../inputs/CategoryCreateWithoutParentCategoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedManyWithoutParentCategoryInput {
    create?: CategoryCreateWithoutParentCategoryInput[] | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutParentCategoryInput[] | undefined;
    createMany?: CategoryCreateManyParentCategoryInputEnvelope | undefined;
    connect?: CategoryWhereUniqueInput[] | undefined;
}
