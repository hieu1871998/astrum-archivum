"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyUserInput_1 = require("../inputs/BudgetCreateManyUserInput");
let BudgetCreateManyUserInputEnvelope = class BudgetCreateManyUserInputEnvelope {
};
exports.BudgetCreateManyUserInputEnvelope = BudgetCreateManyUserInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateManyUserInput_1.BudgetCreateManyUserInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateManyUserInputEnvelope.prototype, "data", void 0);
exports.BudgetCreateManyUserInputEnvelope = BudgetCreateManyUserInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateManyUserInputEnvelope", {})
], BudgetCreateManyUserInputEnvelope);
