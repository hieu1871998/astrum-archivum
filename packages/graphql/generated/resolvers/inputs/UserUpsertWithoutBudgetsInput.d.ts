import { UserCreateWithoutBudgetsInput } from "../inputs/UserCreateWithoutBudgetsInput";
import { UserUpdateWithoutBudgetsInput } from "../inputs/UserUpdateWithoutBudgetsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutBudgetsInput {
    update: UserUpdateWithoutBudgetsInput;
    create: UserCreateWithoutBudgetsInput;
    where?: UserWhereInput | undefined;
}
