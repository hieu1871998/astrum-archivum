"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let FindUniqueBudgetArgs = class FindUniqueBudgetArgs {
};
exports.FindUniqueBudgetArgs = FindUniqueBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], FindUniqueBudgetArgs.prototype, "where", void 0);
exports.FindUniqueBudgetArgs = FindUniqueBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBudgetArgs);
