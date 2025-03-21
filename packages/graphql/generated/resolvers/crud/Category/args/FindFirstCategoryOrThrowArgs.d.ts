import { CategoryOrderByWithRelationInput } from "../../../inputs/CategoryOrderByWithRelationInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";
export declare class FindFirstCategoryOrThrowArgs {
    where?: CategoryWhereInput | undefined;
    orderBy?: CategoryOrderByWithRelationInput[] | undefined;
    cursor?: CategoryWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "icon" | "color" | "parentCategoryId"> | undefined;
}
