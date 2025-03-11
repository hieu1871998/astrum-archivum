"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutBudgetsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBudgetsInput_1 = require("../inputs/UserCreateOrConnectWithoutBudgetsInput");
const UserCreateWithoutBudgetsInput_1 = require("../inputs/UserCreateWithoutBudgetsInput");
const UserUpdateToOneWithWhereWithoutBudgetsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutBudgetsInput");
const UserUpsertWithoutBudgetsInput_1 = require("../inputs/UserUpsertWithoutBudgetsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutBudgetsNestedInput = class UserUpdateOneRequiredWithoutBudgetsNestedInput {
};
exports.UserUpdateOneRequiredWithoutBudgetsNestedInput = UserUpdateOneRequiredWithoutBudgetsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput)
], UserUpdateOneRequiredWithoutBudgetsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBudgetsInput_1.UserCreateOrConnectWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBudgetsInput_1.UserCreateOrConnectWithoutBudgetsInput)
], UserUpdateOneRequiredWithoutBudgetsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutBudgetsInput_1.UserUpsertWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutBudgetsInput_1.UserUpsertWithoutBudgetsInput)
], UserUpdateOneRequiredWithoutBudgetsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutBudgetsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutBudgetsInput_1.UserUpdateToOneWithWhereWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutBudgetsInput_1.UserUpdateToOneWithWhereWithoutBudgetsInput)
], UserUpdateOneRequiredWithoutBudgetsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutBudgetsNestedInput = UserUpdateOneRequiredWithoutBudgetsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutBudgetsNestedInput", {})
], UserUpdateOneRequiredWithoutBudgetsNestedInput);
