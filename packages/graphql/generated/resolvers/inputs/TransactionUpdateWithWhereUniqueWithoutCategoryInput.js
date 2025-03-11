"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutCategoryInput_1 = require("../inputs/TransactionUpdateWithoutCategoryInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutCategoryInput = class TransactionUpdateWithWhereUniqueWithoutCategoryInput {
};
exports.TransactionUpdateWithWhereUniqueWithoutCategoryInput = TransactionUpdateWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutCategoryInput_1.TransactionUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutCategoryInput_1.TransactionUpdateWithoutCategoryInput)
], TransactionUpdateWithWhereUniqueWithoutCategoryInput.prototype, "data", void 0);
exports.TransactionUpdateWithWhereUniqueWithoutCategoryInput = TransactionUpdateWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutCategoryInput", {})
], TransactionUpdateWithWhereUniqueWithoutCategoryInput);
