"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBudgetsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBudgetsInput_1 = require("../inputs/UserCreateWithoutBudgetsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutBudgetsInput = class UserCreateOrConnectWithoutBudgetsInput {
};
exports.UserCreateOrConnectWithoutBudgetsInput = UserCreateOrConnectWithoutBudgetsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutBudgetsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput)
], UserCreateOrConnectWithoutBudgetsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutBudgetsInput = UserCreateOrConnectWithoutBudgetsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutBudgetsInput", {})
], UserCreateOrConnectWithoutBudgetsInput);
