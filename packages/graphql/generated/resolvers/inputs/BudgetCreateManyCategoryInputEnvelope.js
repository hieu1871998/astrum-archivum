"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateManyCategoryInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyCategoryInput_1 = require("../inputs/BudgetCreateManyCategoryInput");
let BudgetCreateManyCategoryInputEnvelope = class BudgetCreateManyCategoryInputEnvelope {
};
exports.BudgetCreateManyCategoryInputEnvelope = BudgetCreateManyCategoryInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateManyCategoryInput_1.BudgetCreateManyCategoryInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateManyCategoryInputEnvelope.prototype, "data", void 0);
exports.BudgetCreateManyCategoryInputEnvelope = BudgetCreateManyCategoryInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateManyCategoryInputEnvelope", {})
], BudgetCreateManyCategoryInputEnvelope);
