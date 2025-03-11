"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateOneRequiredWithoutTransactionsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountCreateOrConnectWithoutTransactionsInput_1 = require("../inputs/AccountCreateOrConnectWithoutTransactionsInput");
const AccountCreateWithoutTransactionsInput_1 = require("../inputs/AccountCreateWithoutTransactionsInput");
const AccountUpdateToOneWithWhereWithoutTransactionsInput_1 = require("../inputs/AccountUpdateToOneWithWhereWithoutTransactionsInput");
const AccountUpsertWithoutTransactionsInput_1 = require("../inputs/AccountUpsertWithoutTransactionsInput");
const AccountWhereUniqueInput_1 = require("../inputs/AccountWhereUniqueInput");
let AccountUpdateOneRequiredWithoutTransactionsNestedInput = class AccountUpdateOneRequiredWithoutTransactionsNestedInput {
};
exports.AccountUpdateOneRequiredWithoutTransactionsNestedInput = AccountUpdateOneRequiredWithoutTransactionsNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateWithoutTransactionsInput_1.AccountCreateWithoutTransactionsInput)
], AccountUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutTransactionsInput_1.AccountCreateOrConnectWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCreateOrConnectWithoutTransactionsInput_1.AccountCreateOrConnectWithoutTransactionsInput)
], AccountUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpsertWithoutTransactionsInput_1.AccountUpsertWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpsertWithoutTransactionsInput_1.AccountUpsertWithoutTransactionsInput)
], AccountUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountWhereUniqueInput_1.AccountWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountWhereUniqueInput_1.AccountWhereUniqueInput)
], AccountUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountUpdateToOneWithWhereWithoutTransactionsInput_1.AccountUpdateToOneWithWhereWithoutTransactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountUpdateToOneWithWhereWithoutTransactionsInput_1.AccountUpdateToOneWithWhereWithoutTransactionsInput)
], AccountUpdateOneRequiredWithoutTransactionsNestedInput.prototype, "update", void 0);
exports.AccountUpdateOneRequiredWithoutTransactionsNestedInput = AccountUpdateOneRequiredWithoutTransactionsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpdateOneRequiredWithoutTransactionsNestedInput", {})
], AccountUpdateOneRequiredWithoutTransactionsNestedInput);
