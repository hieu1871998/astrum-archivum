"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyInput_1 = require("../../../inputs/BudgetCreateManyInput");
let CreateManyBudgetArgs = class CreateManyBudgetArgs {
};
exports.CreateManyBudgetArgs = CreateManyBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateManyInput_1.BudgetCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyBudgetArgs.prototype, "data", void 0);
exports.CreateManyBudgetArgs = CreateManyBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyBudgetArgs);
