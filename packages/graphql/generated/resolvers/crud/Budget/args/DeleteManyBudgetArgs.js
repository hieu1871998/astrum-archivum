"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereInput_1 = require("../../../inputs/BudgetWhereInput");
let DeleteManyBudgetArgs = class DeleteManyBudgetArgs {
};
exports.DeleteManyBudgetArgs = DeleteManyBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], DeleteManyBudgetArgs.prototype, "where", void 0);
exports.DeleteManyBudgetArgs = DeleteManyBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyBudgetArgs);
