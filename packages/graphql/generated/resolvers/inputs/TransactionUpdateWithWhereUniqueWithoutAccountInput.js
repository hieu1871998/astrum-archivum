"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdateWithWhereUniqueWithoutAccountInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionUpdateWithoutAccountInput_1 = require("../inputs/TransactionUpdateWithoutAccountInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionUpdateWithWhereUniqueWithoutAccountInput = class TransactionUpdateWithWhereUniqueWithoutAccountInput {
};
exports.TransactionUpdateWithWhereUniqueWithoutAccountInput = TransactionUpdateWithWhereUniqueWithoutAccountInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionWhereUniqueInput_1.TransactionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionWhereUniqueInput_1.TransactionWhereUniqueInput)
], TransactionUpdateWithWhereUniqueWithoutAccountInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionUpdateWithoutAccountInput_1.TransactionUpdateWithoutAccountInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TransactionUpdateWithoutAccountInput_1.TransactionUpdateWithoutAccountInput)
], TransactionUpdateWithWhereUniqueWithoutAccountInput.prototype, "data", void 0);
exports.TransactionUpdateWithWhereUniqueWithoutAccountInput = TransactionUpdateWithWhereUniqueWithoutAccountInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdateWithWhereUniqueWithoutAccountInput", {})
], TransactionUpdateWithWhereUniqueWithoutAccountInput);
