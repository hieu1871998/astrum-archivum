import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
export declare class FindFirstAccountOrThrowArgs {
    where?: AccountWhereInput | undefined;
    orderBy?: AccountOrderByWithRelationInput[] | undefined;
    cursor?: AccountWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "userId" | "name" | "type" | "currency" | "createdAt" | "updatedAt"> | undefined;
}
