import { CategoryCountOrderByAggregateInput } from "../inputs/CategoryCountOrderByAggregateInput";
import { CategoryMaxOrderByAggregateInput } from "../inputs/CategoryMaxOrderByAggregateInput";
import { CategoryMinOrderByAggregateInput } from "../inputs/CategoryMinOrderByAggregateInput";
export declare class CategoryOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    icon?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    parentCategoryId?: "asc" | "desc" | undefined;
    _count?: CategoryCountOrderByAggregateInput | undefined;
    _max?: CategoryMaxOrderByAggregateInput | undefined;
    _min?: CategoryMinOrderByAggregateInput | undefined;
}
