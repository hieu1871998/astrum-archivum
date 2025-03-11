"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateWithoutTransactionsInput_1 = require("../inputs/UserCreateWithoutTransactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateOrConnectWithoutTransactionsInput = class UserCreateOrConnectWithoutTransactionsInput {
};
exports.UserCreateOrConnectWithoutTransactionsInput = UserCreateOrConnectWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateOrConnectWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput)
], UserCreateOrConnectWithoutTransactionsInput.prototype, "create", void 0);
exports.UserCreateOrConnectWithoutTransactionsInput = UserCreateOrConnectWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateOrConnectWithoutTransactionsInput", {})
], UserCreateOrConnectWithoutTransactionsInput);
