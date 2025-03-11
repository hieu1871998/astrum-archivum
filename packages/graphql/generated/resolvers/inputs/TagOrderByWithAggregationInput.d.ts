import { TagCountOrderByAggregateInput } from "../inputs/TagCountOrderByAggregateInput";
import { TagMaxOrderByAggregateInput } from "../inputs/TagMaxOrderByAggregateInput";
import { TagMinOrderByAggregateInput } from "../inputs/TagMinOrderByAggregateInput";
export declare class TagOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    transactionIds?: "asc" | "desc" | undefined;
    _count?: TagCountOrderByAggregateInput | undefined;
    _max?: TagMaxOrderByAggregateInput | undefined;
    _min?: TagMinOrderByAggregateInput | undefined;
}
