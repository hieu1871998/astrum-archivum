"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const EnumAccountTypeFieldUpdateOperationsInput_1 = require("../inputs/EnumAccountTypeFieldUpdateOperationsInput");
const EnumCurrencyFieldUpdateOperationsInput_1 = require("../inputs/EnumCurrencyFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TransactionUpdateManyWithoutAccountNestedInput_1 = require("../inputs/TransactionUpdateManyWithoutAccountNestedInput");
const UserUpdateOneRequiredWithoutAccountsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutAccountsNestedInput");
let AccountUpdateInput = class AccountUpdateInput {
};
exports.AccountUpdateInput = AccountUpdateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], AccountUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumAccountTypeFieldUpdateOperationsInput_1.EnumAccountTypeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumAccountTypeFieldUpdateOperationsInput_1.EnumAccountTypeFieldUpdateOperationsInput)
], AccountUpdateInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EnumCurrencyFieldUpdateOperationsInput_1.EnumCurrencyFieldUpdateOperationsInput)
], AccountUpdateInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AccountUpdateInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], AccountUpdateInput.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutAccountsNestedInput_1.UserUpdateOneRequiredWithoutAccountsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutAccountsNestedInput_1.UserUpdateOneRequiredWithoutAccountsNestedInput)
], AccountUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateManyWithoutAccountNestedInput_1.TransactionUpdateManyWithoutAccountNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionUpdateManyWithoutAccountNestedInput_1.TransactionUpdateManyWithoutAccountNestedInput)
], AccountUpdateInput.prototype, "transactions", void 0);
exports.AccountUpdateInput = AccountUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountUpdateInput", {})
], AccountUpdateInput);
