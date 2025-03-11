import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
export declare class CategoryGroupBy {
    id: string;
    name: string;
    icon: string | null;
    color: string | null;
    parentCategoryId: string | null;
    _count: CategoryCountAggregate | null;
    _min: CategoryMinAggregate | null;
    _max: CategoryMaxAggregate | null;
}
