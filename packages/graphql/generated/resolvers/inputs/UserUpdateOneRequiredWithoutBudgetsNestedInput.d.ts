import { UserCreateOrConnectWithoutBudgetsInput } from "../inputs/UserCreateOrConnectWithoutBudgetsInput";
import { UserCreateWithoutBudgetsInput } from "../inputs/UserCreateWithoutBudgetsInput";
import { UserUpdateToOneWithWhereWithoutBudgetsInput } from "../inputs/UserUpdateToOneWithWhereWithoutBudgetsInput";
import { UserUpsertWithoutBudgetsInput } from "../inputs/UserUpsertWithoutBudgetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutBudgetsNestedInput {
    create?: UserCreateWithoutBudgetsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput | undefined;
    upsert?: UserUpsertWithoutBudgetsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutBudgetsInput | undefined;
}
