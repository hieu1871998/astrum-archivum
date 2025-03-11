import { CategoryCreateOrConnectWithoutSubcategoriesInput } from "../inputs/CategoryCreateOrConnectWithoutSubcategoriesInput";
import { CategoryCreateWithoutSubcategoriesInput } from "../inputs/CategoryCreateWithoutSubcategoriesInput";
import { CategoryUpdateToOneWithWhereWithoutSubcategoriesInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutSubcategoriesInput";
import { CategoryUpsertWithoutSubcategoriesInput } from "../inputs/CategoryUpsertWithoutSubcategoriesInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneWithoutSubcategoriesNestedInput {
    create?: CategoryCreateWithoutSubcategoriesInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput | undefined;
    upsert?: CategoryUpsertWithoutSubcategoriesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: CategoryWhereInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutSubcategoriesInput | undefined;
}
