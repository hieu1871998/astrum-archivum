"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateWithoutCategoryInput_1 = require("../inputs/BudgetUpdateWithoutCategoryInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpdateWithWhereUniqueWithoutCategoryInput = class BudgetUpdateWithWhereUniqueWithoutCategoryInput {
};
exports.BudgetUpdateWithWhereUniqueWithoutCategoryInput = BudgetUpdateWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetUpdateWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateWithoutCategoryInput_1.BudgetUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateWithoutCategoryInput_1.BudgetUpdateWithoutCategoryInput)
], BudgetUpdateWithWhereUniqueWithoutCategoryInput.prototype, "data", void 0);
exports.BudgetUpdateWithWhereUniqueWithoutCategoryInput = BudgetUpdateWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateWithWhereUniqueWithoutCategoryInput", {})
], BudgetUpdateWithWhereUniqueWithoutCategoryInput);
