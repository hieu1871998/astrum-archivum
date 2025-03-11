"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumAccountTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountType_1 = require("../../enums/AccountType");
let EnumAccountTypeFieldUpdateOperationsInput = class EnumAccountTypeFieldUpdateOperationsInput {
};
exports.EnumAccountTypeFieldUpdateOperationsInput = EnumAccountTypeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumAccountTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumAccountTypeFieldUpdateOperationsInput = EnumAccountTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumAccountTypeFieldUpdateOperationsInput", {})
], EnumAccountTypeFieldUpdateOperationsInput);
