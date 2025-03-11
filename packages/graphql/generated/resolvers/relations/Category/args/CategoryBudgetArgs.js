"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetOrderByWithRelationInput_1 = require("../../../inputs/BudgetOrderByWithRelationInput");
const BudgetWhereInput_1 = require("../../../inputs/BudgetWhereInput");
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
const BudgetScalarFieldEnum_1 = require("../../../../enums/BudgetScalarFieldEnum");
let CategoryBudgetArgs = class CategoryBudgetArgs {
};
exports.CategoryBudgetArgs = CategoryBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], CategoryBudgetArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetOrderByWithRelationInput_1.BudgetOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryBudgetArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], CategoryBudgetArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryBudgetArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CategoryBudgetArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetScalarFieldEnum_1.BudgetScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CategoryBudgetArgs.prototype, "distinct", void 0);
exports.CategoryBudgetArgs = CategoryBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CategoryBudgetArgs);
