"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueBudgetOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let FindUniqueBudgetOrThrowArgs = class FindUniqueBudgetOrThrowArgs {
};
exports.FindUniqueBudgetOrThrowArgs = FindUniqueBudgetOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], FindUniqueBudgetOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueBudgetOrThrowArgs = FindUniqueBudgetOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueBudgetOrThrowArgs);
