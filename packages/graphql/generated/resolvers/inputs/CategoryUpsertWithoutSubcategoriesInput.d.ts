import { CategoryCreateWithoutSubcategoriesInput } from "../inputs/CategoryCreateWithoutSubcategoriesInput";
import { CategoryUpdateWithoutSubcategoriesInput } from "../inputs/CategoryUpdateWithoutSubcategoriesInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
export declare class CategoryUpsertWithoutSubcategoriesInput {
    update: CategoryUpdateWithoutSubcategoriesInput;
    create: CategoryCreateWithoutSubcategoriesInput;
    where?: CategoryWhereInput | undefined;
}
