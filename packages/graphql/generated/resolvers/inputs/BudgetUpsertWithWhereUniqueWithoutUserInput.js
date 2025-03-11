"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpsertWithWhereUniqueWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BudgetCreateWithoutUserInput_1 = require("../inputs/BudgetCreateWithoutUserInput");
const BudgetUpdateWithoutUserInput_1 = require("../inputs/BudgetUpdateWithoutUserInput");
const BudgetWhereUniqueInput_1 = require("../inputs/BudgetWhereUniqueInput");
let BudgetUpsertWithWhereUniqueWithoutUserInput = class BudgetUpsertWithWhereUniqueWithoutUserInput {
};
exports.BudgetUpsertWithWhereUniqueWithoutUserInput = BudgetUpsertWithWhereUniqueWithoutUserInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetWhereUniqueInput_1.BudgetWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetWhereUniqueInput_1.BudgetWhereUniqueInput)
], BudgetUpsertWithWhereUniqueWithoutUserInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetUpdateWithoutUserInput_1.BudgetUpdateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetUpdateWithoutUserInput_1.BudgetUpdateWithoutUserInput)
], BudgetUpsertWithWhereUniqueWithoutUserInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", BudgetCreateWithoutUserInput_1.BudgetCreateWithoutUserInput)
], BudgetUpsertWithWhereUniqueWithoutUserInput.prototype, "create", void 0);
exports.BudgetUpsertWithWhereUniqueWithoutUserInput = BudgetUpsertWithWhereUniqueWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("BudgetUpsertWithWhereUniqueWithoutUserInput", {})
], BudgetUpsertWithWhereUniqueWithoutUserInput);
