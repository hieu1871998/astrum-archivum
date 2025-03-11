import { CategoryCreateOrConnectWithoutTransactionsInput } from "../inputs/CategoryCreateOrConnectWithoutTransactionsInput";
import { CategoryCreateWithoutTransactionsInput } from "../inputs/CategoryCreateWithoutTransactionsInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";
export declare class CategoryCreateNestedOneWithoutTransactionsInput {
    create?: CategoryCreateWithoutTransactionsInput | undefined;
    connectOrCreate?: CategoryCreateOrConnectWithoutTransactionsInput | undefined;
    connect?: CategoryWhereUniqueInput | undefined;
}
