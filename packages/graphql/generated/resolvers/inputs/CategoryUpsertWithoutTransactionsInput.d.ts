import { CategoryCreateWithoutTransactionsInput } from "../inputs/CategoryCreateWithoutTransactionsInput";
import { CategoryUpdateWithoutTransactionsInput } from "../inputs/CategoryUpdateWithoutTransactionsInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
export declare class CategoryUpsertWithoutTransactionsInput {
    update: CategoryUpdateWithoutTransactionsInput;
    create: CategoryCreateWithoutTransactionsInput;
    where?: CategoryWhereInput | undefined;
}
