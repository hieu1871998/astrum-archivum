"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRecurrenceTypeFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RecurrenceType_1 = require("../../enums/RecurrenceType");
let EnumRecurrenceTypeFieldUpdateOperationsInput = class EnumRecurrenceTypeFieldUpdateOperationsInput {
};
exports.EnumRecurrenceTypeFieldUpdateOperationsInput = EnumRecurrenceTypeFieldUpdateOperationsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RecurrenceType_1.RecurrenceType, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EnumRecurrenceTypeFieldUpdateOperationsInput.prototype, "set", void 0);
exports.EnumRecurrenceTypeFieldUpdateOperationsInput = EnumRecurrenceTypeFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EnumRecurrenceTypeFieldUpdateOperationsInput", {})
], EnumRecurrenceTypeFieldUpdateOperationsInput);
