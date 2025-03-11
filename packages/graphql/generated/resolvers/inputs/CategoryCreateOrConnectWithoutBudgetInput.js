"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryCreateOrConnectWithoutBudgetInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CategoryCreateWithoutBudgetInput_1 = require("../inputs/CategoryCreateWithoutBudgetInput");
const CategoryWhereUniqueInput_1 = require("../inputs/CategoryWhereUniqueInput");
let CategoryCreateOrConnectWithoutBudgetInput = class CategoryCreateOrConnectWithoutBudgetInput {
};
exports.CategoryCreateOrConnectWithoutBudgetInput = CategoryCreateOrConnectWithoutBudgetInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryWhereUniqueInput_1.CategoryWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryWhereUniqueInput_1.CategoryWhereUniqueInput)
], CategoryCreateOrConnectWithoutBudgetInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CategoryCreateWithoutBudgetInput_1.CategoryCreateWithoutBudgetInput)
], CategoryCreateOrConnectWithoutBudgetInput.prototype, "create", void 0);
exports.CategoryCreateOrConnectWithoutBudgetInput = CategoryCreateOrConnectWithoutBudgetInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CategoryCreateOrConnectWithoutBudgetInput", {})
], CategoryCreateOrConnectWithoutBudgetInput);
