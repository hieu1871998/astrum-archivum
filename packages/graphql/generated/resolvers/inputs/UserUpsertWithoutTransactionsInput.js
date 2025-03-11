"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTransactionsInput_1 = require("../inputs/UserCreateWithoutTransactionsInput");
const UserUpdateWithoutTransactionsInput_1 = require("../inputs/UserUpdateWithoutTransactionsInput");
const UserWhereInput_1 = require("../inputs/UserWhereInput");
let UserUpsertWithoutTransactionsInput = class UserUpsertWithoutTransactionsInput {
};
exports.UserUpsertWithoutTransactionsInput = UserUpsertWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutTransactionsInput_1.UserUpdateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateWithoutTransactionsInput_1.UserUpdateWithoutTransactionsInput)
], UserUpsertWithoutTransactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput)
], UserUpsertWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], UserUpsertWithoutTransactionsInput.prototype, "where", void 0);
exports.UserUpsertWithoutTransactionsInput = UserUpsertWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpsertWithoutTransactionsInput", {})
], UserUpsertWithoutTransactionsInput);
