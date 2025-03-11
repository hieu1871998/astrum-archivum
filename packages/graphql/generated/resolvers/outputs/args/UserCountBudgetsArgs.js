"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCountBudgetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetWhereInput_1 = require("../../inputs/BudgetWhereInput");
let UserCountBudgetsArgs = class UserCountBudgetsArgs {
};
exports.UserCountBudgetsArgs = UserCountBudgetsArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereInput_1.BudgetWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetWhereInput_1.BudgetWhereInput)
], UserCountBudgetsArgs.prototype, "where", void 0);
exports.UserCountBudgetsArgs = UserCountBudgetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserCountBudgetsArgs);
