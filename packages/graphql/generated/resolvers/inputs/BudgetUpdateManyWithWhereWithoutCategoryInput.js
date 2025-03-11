"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateManyWithWhereWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetScalarWhereInput_1 = require("../inputs/BudgetScalarWhereInput");
const BudgetUpdateManyMutationInput_1 = require("../inputs/BudgetUpdateManyMutationInput");
let BudgetUpdateManyWithWhereWithoutCategoryInput = class BudgetUpdateManyWithWhereWithoutCategoryInput {
};
exports.BudgetUpdateManyWithWhereWithoutCategoryInput = BudgetUpdateManyWithWhereWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetScalarWhereInput_1.BudgetScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetScalarWhereInput_1.BudgetScalarWhereInput)
], BudgetUpdateManyWithWhereWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateManyMutationInput_1.BudgetUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateManyMutationInput_1.BudgetUpdateManyMutationInput)
], BudgetUpdateManyWithWhereWithoutCategoryInput.prototype, "data", void 0);
exports.BudgetUpdateManyWithWhereWithoutCategoryInput = BudgetUpdateManyWithWhereWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateManyWithWhereWithoutCategoryInput", {})
], BudgetUpdateManyWithWhereWithoutCategoryInput);
