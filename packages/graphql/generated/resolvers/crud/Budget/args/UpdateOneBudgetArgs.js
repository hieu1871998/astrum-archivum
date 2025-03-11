"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateInput_1 = require("../../../inputs/BudgetUpdateInput");
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let UpdateOneBudgetArgs = class UpdateOneBudgetArgs {
};
exports.UpdateOneBudgetArgs = UpdateOneBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateInput_1.BudgetUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateInput_1.BudgetUpdateInput)
], UpdateOneBudgetArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], UpdateOneBudgetArgs.prototype, "where", void 0);
exports.UpdateOneBudgetArgs = UpdateOneBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneBudgetArgs);
