"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBudgetsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutBudgetsInput_1 = require("../inputs/UserCreateWithoutBudgetsInput");
const UserUpdateWithoutBudgetsInput_1 = require("../inputs/UserUpdateWithoutBudgetsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutBudgetsInput = class UserUpsertWithoutBudgetsInput {
};
exports.UserUpsertWithoutBudgetsInput = UserUpsertWithoutBudgetsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBudgetsInput_1.UserUpdateWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBudgetsInput_1.UserUpdateWithoutBudgetsInput)
], UserUpsertWithoutBudgetsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutBudgetsInput_1.UserCreateWithoutBudgetsInput)
], UserUpsertWithoutBudgetsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutBudgetsInput.prototype, "where", void 0);
exports.UserUpsertWithoutBudgetsInput = UserUpsertWithoutBudgetsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutBudgetsInput", {})
], UserUpsertWithoutBudgetsInput);
