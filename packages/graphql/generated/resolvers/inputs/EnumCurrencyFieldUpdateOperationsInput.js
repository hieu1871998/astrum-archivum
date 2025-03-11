"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumCurrencyFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Currency_1 = require("../../enums/Currency");
let EnumCurrencyFieldUpdateOperationsInput = class EnumCurrencyFieldUpdateOperationsInput {
};
exports.EnumCurrencyFieldUpdateOperationsInput = EnumCurrencyFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumCurrencyFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumCurrencyFieldUpdateOperationsInput = EnumCurrencyFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumCurrencyFieldUpdateOperationsInput", {})
], EnumCurrencyFieldUpdateOperationsInput);
