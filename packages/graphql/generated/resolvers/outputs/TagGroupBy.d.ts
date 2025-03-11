import { TagCountAggregate } from "../outputs/TagCountAggregate";
import { TagMaxAggregate } from "../outputs/TagMaxAggregate";
import { TagMinAggregate } from "../outputs/TagMinAggregate";
export declare class TagGroupBy {
    id: string;
    name: string;
    transactionIds: string[] | null;
    _count: TagCountAggregate | null;
    _min: TagMinAggregate | null;
    _max: TagMaxAggregate | null;
}
