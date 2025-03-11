"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereInput_1 = require("../inputs/BudgetWhereInput");
let BudgetListRelationFilter = class BudgetListRelationFilter {
};
exports.BudgetListRelationFilter = BudgetListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], BudgetListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], BudgetListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], BudgetListRelationFilter.prototype, "none", void 0);
exports.BudgetListRelationFilter = BudgetListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetListRelationFilter", {})
], BudgetListRelationFilter);
