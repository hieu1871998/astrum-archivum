"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBudgetsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutBudgetsInput_1 = require("../inputs/UserCreateOrConnectWithoutBudgetsInput");
const UserCreateWithoutBudgetsInput_1 = require("../inputs/UserCreateWithoutBudgetsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutBudgetsInput = class UserCreateNestedOneWithoutBudgetsInput {
};
exports.UserCreateNestedOneWithoutBudgetsInput = UserCreateNestedOneWithoutBudgetsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput)
], UserCreateNestedOneWithoutBudgetsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutBudgetsInput_1.UserCreateOrConnectWithoutBudgetsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutBudgetsInput_1.UserCreateOrConnectWithoutBudgetsInput)
], UserCreateNestedOneWithoutBudgetsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutBudgetsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutBudgetsInput = UserCreateNestedOneWithoutBudgetsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutBudgetsInput", {})
], UserCreateNestedOneWithoutBudgetsInput);
