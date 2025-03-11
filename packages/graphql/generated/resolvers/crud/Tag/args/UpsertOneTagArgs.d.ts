import { TagCreateInput } from "../../../inputs/TagCreateInput";
import { TagUpdateInput } from "../../../inputs/TagUpdateInput";
import { TagWhereUniqueInput } from "../../../inputs/TagWhereUniqueInput";
export declare class UpsertOneTagArgs {
    where: TagWhereUniqueInput;
    create: TagCreateInput;
    update: TagUpdateInput;
}
