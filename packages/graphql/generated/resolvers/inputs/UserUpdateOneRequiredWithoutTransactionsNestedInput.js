"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutTransactionsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/UserCreateOrConnectWithoutTransactionsInput");
const UserCreateWithoutTransactionsInput_1 = require("../inputs/UserCreateWithoutTransactionsInput");
const UserUpdateToOneWithWhereWithoutTransactionsInput_1 = require("../inputs/UserUpdateToOneWithWhereWithoutTransactionsInput");
const UserUpsertWithoutTransactionsInput_1 = require("../inputs/UserUpsertWithoutTransactionsInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutTransactionsNestedInput = class UserUpdateOneRequiredWithoutTransactionsNestedInput {
};
exports.UserUpdateOneRequiredWithoutTransactionsNestedInput = UserUpdateOneRequiredWithoutTransactionsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateWithoutTransactionsInput_1.UserCreateWithoutTransactionsInput)
], UserUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTransactionsInput_1.UserCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserCreateOrConnectWithoutTransactionsInput_1.UserCreateOrConnectWithoutTransactionsInput)
], UserUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutTransactionsInput_1.UserUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpsertWithoutTransactionsInput_1.UserUpsertWithoutTransactionsInput)
], UserUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTransactionsInput_1.UserUpdateToOneWithWhereWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateToOneWithWhereWithoutTransactionsInput_1.UserUpdateToOneWithWhereWithoutTransactionsInput)
], UserUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "update", void 0);
exports.UserUpdateOneRequiredWithoutTransactionsNestedInput = UserUpdateOneRequiredWithoutTransactionsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTransactionsNestedInput", {})
], UserUpdateOneRequiredWithoutTransactionsNestedInput);
