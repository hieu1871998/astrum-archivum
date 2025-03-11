"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetOrderByWithRelationInput_1 = require("../../../inputs/BudgetOrderByWithRelationInput");
const BudgetWhereInput_1 = require("../../../inputs/BudgetWhereInput");
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let AggregateBudgetArgs = class AggregateBudgetArgs {
};
exports.AggregateBudgetArgs = AggregateBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], AggregateBudgetArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetOrderByWithRelationInput_1.BudgetOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateBudgetArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], AggregateBudgetArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBudgetArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateBudgetArgs.prototype, "skip", void 0);
exports.AggregateBudgetArgs = AggregateBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateBudgetArgs);
