"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateManyMutationInput_1 = require("../../../inputs/BudgetUpdateManyMutationInput");
const BudgetWhereInput_1 = require("../../../inputs/BudgetWhereInput");
let UpdateManyBudgetArgs = class UpdateManyBudgetArgs {
};
exports.UpdateManyBudgetArgs = UpdateManyBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateManyMutationInput_1.BudgetUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateManyMutationInput_1.BudgetUpdateManyMutationInput)
], UpdateManyBudgetArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], UpdateManyBudgetArgs.prototype, "where", void 0);
exports.UpdateManyBudgetArgs = UpdateManyBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyBudgetArgs);
