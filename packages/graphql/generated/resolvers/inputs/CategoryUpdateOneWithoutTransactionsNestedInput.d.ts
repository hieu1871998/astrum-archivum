import { CategoryCreateOrConnectWithoutTransactionsInput } from "../inputs/CategoryCreateOrConnectWithoutTransactionsInput";
import { CategoryCreateWithoutTransactionsInput } from "../inputs/CategoryCreateWithoutTransactionsInput";
import { CategoryUpdateToOneWithWhereWithoutTransactionsInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutTransactionsInput";
import { CategoryUpsertWithoutTransactionsInput } from "../inputs/CategoryUpsertWithoutTransactionsInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryUpdateOneWithoutTransactionsNestedInput {
    create?: CategoryCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput | undefined;
    upsert?: CategoryUpsertWithoutTransactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: CategoryWhereInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
    update?: CategoryUpdateToOneWithWhereWithoutTransactionsInput | undefined;
}
