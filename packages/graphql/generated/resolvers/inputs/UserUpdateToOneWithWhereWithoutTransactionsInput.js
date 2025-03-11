"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateToOneWithWhereWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateWithoutTransactionsInput_1 = require("../inputs/UserUpdateWithoutTransactionsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpdateToOneWithWhereWithoutTransactionsInput = class UserUpdateToOneWithWhereWithoutTransactionsInput {
};
exports.UserUpdateToOneWithWhereWithoutTransactionsInput = UserUpdateToOneWithWhereWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpdateToOneWithWhereWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTransactionsInput_1.UserUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTransactionsInput_1.UserUpdateWithoutTransactionsInput)
], UserUpdateToOneWithWhereWithoutTransactionsInput.prototype, "data", void 0);
exports.UserUpdateToOneWithWhereWithoutTransactionsInput = UserUpdateToOneWithWhereWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutTransactionsInput", {})
], UserUpdateToOneWithWhereWithoutTransactionsInput);
