"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutCategoryInput_1 = require("../inputs/TransactionCreateWithoutCategoryInput");
const TransactionUpdateWithoutCategoryInput_1 = require("../inputs/TransactionUpdateWithoutCategoryInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutCategoryInput = class TransactionUpsertWithWhereUniqueWithoutCategoryInput {
};
exports.TransactionUpsertWithWhereUniqueWithoutCategoryInput = TransactionUpsertWithWhereUniqueWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutCategoryInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutCategoryInput_1.TransactionUpdateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutCategoryInput_1.TransactionUpdateWithoutCategoryInput)
], TransactionUpsertWithWhereUniqueWithoutCategoryInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput)
], TransactionUpsertWithWhereUniqueWithoutCategoryInput.prototype, "create", void 0);
exports.TransactionUpsertWithWhereUniqueWithoutCategoryInput = TransactionUpsertWithWhereUniqueWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutCategoryInput", {})
], TransactionUpsertWithWhereUniqueWithoutCategoryInput);
