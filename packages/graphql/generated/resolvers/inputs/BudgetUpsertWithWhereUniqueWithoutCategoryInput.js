"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpsertWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateWithoutCategoryInput_1 = require("../inputs/BudgetCreateWithoutCategoryInput");
const BudgetUpdateWithoutCategoryInput_1 = require("../inputs/BudgetUpdateWithoutCategoryInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpsertWithWhereUniqueWithoutCategoryInput = class BudgetUpsertWithWhereUniqueWithoutCategoryInput {
};
exports.BudgetUpsertWithWhereUniqueWithoutCategoryInput = BudgetUpsertWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetUpsertWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateWithoutCategoryInput_1.BudgetUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateWithoutCategoryInput_1.BudgetUpdateWithoutCategoryInput)
], BudgetUpsertWithWhereUniqueWithoutCategoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput)
], BudgetUpsertWithWhereUniqueWithoutCategoryInput.prototype, "create", void 0);
exports.BudgetUpsertWithWhereUniqueWithoutCategoryInput = BudgetUpsertWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpsertWithWhereUniqueWithoutCategoryInput", {})
], BudgetUpsertWithWhereUniqueWithoutCategoryInput);
