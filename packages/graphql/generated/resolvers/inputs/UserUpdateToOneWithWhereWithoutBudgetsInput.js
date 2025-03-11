"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutBudgetsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutBudgetsInput_1 = require("../inputs/UserUpdateWithoutBudgetsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutBudgetsInput = class UserUpdateToOneWithWhereWithoutBudgetsInput {
};
exports.UserUpdateToOneWithWhereWithoutBudgetsInput = UserUpdateToOneWithWhereWithoutBudgetsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutBudgetsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutBudgetsInput_1.UserUpdateWithoutBudgetsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutBudgetsInput_1.UserUpdateWithoutBudgetsInput)
], UserUpdateToOneWithWhereWithoutBudgetsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutBudgetsInput = UserUpdateToOneWithWhereWithoutBudgetsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutBudgetsInput", {})
], UserUpdateToOneWithWhereWithoutBudgetsInput);
