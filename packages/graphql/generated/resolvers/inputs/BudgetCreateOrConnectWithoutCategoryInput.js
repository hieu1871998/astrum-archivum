"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateOrConnectWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateWithoutCategoryInput_1 = require("../inputs/BudgetCreateWithoutCategoryInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetCreateOrConnectWithoutCategoryInput = class BudgetCreateOrConnectWithoutCategoryInput {
};
exports.BudgetCreateOrConnectWithoutCategoryInput = BudgetCreateOrConnectWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetCreateOrConnectWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput)
], BudgetCreateOrConnectWithoutCategoryInput.prototype, "create", void 0);
exports.BudgetCreateOrConnectWithoutCategoryInput = BudgetCreateOrConnectWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateOrConnectWithoutCategoryInput", {})
], BudgetCreateOrConnectWithoutCategoryInput);
