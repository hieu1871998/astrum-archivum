import { CategoryCreateOrConnectWithoutSubcategoriesInput } from "../inputs/CategoryCreateOrConnectWithoutSubcategoriesInput";
import { CategoryCreateWithoutSubcategoriesInput } from "../inputs/CategoryCreateWithoutSubcategoriesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedOneWithoutSubcategoriesInput {
    create?: CategoryCreateWithoutSubcategoriesInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutSubcategoriesInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
}
