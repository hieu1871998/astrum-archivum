"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetCreateNestedManyWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateManyCategoryInputEnvelope_1 = require("../inputs/BudgetCreateManyCategoryInputEnvelope");
const BudgetCreateOrConnectWithoutCategoryInput_1 = require("../inputs/BudgetCreateOrConnectWithoutCategoryInput");
const BudgetCreateWithoutCategoryInput_1 = require("../inputs/BudgetCreateWithoutCategoryInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetCreateNestedManyWithoutCategoryInput = class BudgetCreateNestedManyWithoutCategoryInput {
};
exports.BudgetCreateNestedManyWithoutCategoryInput = BudgetCreateNestedManyWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateWithoutCategoryInput_1.BudgetCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetCreateOrConnectWithoutCategoryInput_1.BudgetCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateManyCategoryInputEnvelope_1.BudgetCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BudgetCreateManyCategoryInputEnvelope_1.BudgetCreateManyCategoryInputEnvelope)
], BudgetCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [BudgetWhereUniqueInput_1.BudgetWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], BudgetCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
exports.BudgetCreateNestedManyWithoutCategoryInput = BudgetCreateNestedManyWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetCreateNestedManyWithoutCategoryInput", {})
], BudgetCreateNestedManyWithoutCategoryInput);
