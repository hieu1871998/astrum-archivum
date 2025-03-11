"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdateWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetUpdateWithoutUserInput_1 = require("../inputs/BudgetUpdateWithoutUserInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpdateWithWhereUniqueWithoutUserInput = class BudgetUpdateWithWhereUniqueWithoutUserInput {
};
exports.BudgetUpdateWithWhereUniqueWithoutUserInput = BudgetUpdateWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetUpdateWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateWithoutUserInput_1.BudgetUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateWithoutUserInput_1.BudgetUpdateWithoutUserInput)
], BudgetUpdateWithWhereUniqueWithoutUserInput.prototype, "data", void 0);
exports.BudgetUpdateWithWhereUniqueWithoutUserInput = BudgetUpdateWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpdateWithWhereUniqueWithoutUserInput", {})
], BudgetUpdateWithWhereUniqueWithoutUserInput);
