"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneBudgetArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereUniqueInput_1 = require("../../../inputs/BudgetWhereUniqueInput");
let DeleteOneBudgetArgs = class DeleteOneBudgetArgs {
};
exports.DeleteOneBudgetArgs = DeleteOneBudgetArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], DeleteOneBudgetArgs.prototype, "where", void 0);
exports.DeleteOneBudgetArgs = DeleteOneBudgetArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneBudgetArgs);
