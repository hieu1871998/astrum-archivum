"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateInput_1 = require("../../../inputs/BudgetCreateInput");
let CreateOneBudgetArgs = class CreateOneBudgetArgs {
};
exports.CreateOneBudgetArgs = CreateOneBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateInput_1.BudgetCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateInput_1.BudgetCreateInput)
], CreateOneBudgetArgs.prototype, "data", void 0);
exports.CreateOneBudgetArgs = CreateOneBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneBudgetArgs);
