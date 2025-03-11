import { UserCreateOrConnectWithoutBudgetsInput } from "../inputs/UserCreateOrConnectWithoutBudgetsInput";
import { UserCreateWithoutBudgetsInput } from "../inputs/UserCreateWithoutBudgetsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutBudgetsInput {
    create?: UserCreateWithoutBudgetsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutBudgetsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
