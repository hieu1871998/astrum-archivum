"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateInput_1 = require("../../../inputs/BudgetCreateInput");
const BudgetUpdateInput_1 = require("../../../inputs/BudgetUpdateInput");
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let UpsertOneBudgetArgs = class UpsertOneBudgetArgs {
};
exports.UpsertOneBudgetArgs = UpsertOneBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], UpsertOneBudgetArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateInput_1.BudgetCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateInput_1.BudgetCreateInput)
], UpsertOneBudgetArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateInput_1.BudgetUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateInput_1.BudgetUpdateInput)
], UpsertOneBudgetArgs.prototype, "update", void 0);
exports.UpsertOneBudgetArgs = UpsertOneBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneBudgetArgs);
