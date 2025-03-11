"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpsertWithWhereUniqueWithoutAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateWithoutAccountInput_1 = require("../inputs/TransactionCreateWithoutAccountInput");
const TransactionUpdateWithoutAccountInput_1 = require("../inputs/TransactionUpdateWithoutAccountInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpsertWithWhereUniqueWithoutAccountInput = class TransactionUpsertWithWhereUniqueWithoutAccountInput {
};
exports.TransactionUpsertWithWhereUniqueWithoutAccountInput = TransactionUpsertWithWhereUniqueWithoutAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpsertWithWhereUniqueWithoutAccountInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutAccountInput_1.TransactionUpdateWithoutAccountInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutAccountInput_1.TransactionUpdateWithoutAccountInput)
], TransactionUpsertWithWhereUniqueWithoutAccountInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionCreateWithoutAccountInput_1.TransactionCreateWithoutAccountInput)
], TransactionUpsertWithWhereUniqueWithoutAccountInput.prototype, "create", void 0);
exports.TransactionUpsertWithWhereUniqueWithoutAccountInput = TransactionUpsertWithWhereUniqueWithoutAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpsertWithWhereUniqueWithoutAccountInput", {})
], TransactionUpsertWithWhereUniqueWithoutAccountInput);
