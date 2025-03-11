"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/UserCreateOrConnectWithoutTransactionsInput");
const UserCreateWithoutTransactionsInput_1 = require("../inputs/UserCreateWithoutTransactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutTransactionsInput = class UserCreateNestedOneWithoutTransactionsInput {
};
exports.UserCreateNestedOneWithoutTransactionsInput = UserCreateNestedOneWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput)
], UserCreateNestedOneWithoutTransactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionsInput_1.UserCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTransactionsInput_1.UserCreateOrConnectWithoutTransactionsInput)
], UserCreateNestedOneWithoutTransactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutTransactionsInput.prototype, "connect", void 0);
exports.UserCreateNestedOneWithoutTransactionsInput = UserCreateNestedOneWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserCreateNestedOneWithoutTransactionsInput", {})
], UserCreateNestedOneWithoutTransactionsInput);
