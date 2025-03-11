"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCreateNestedManyWithoutCategoryInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateManyCategoryInputEnvelope_1 = require("../inputs/TransactionCreateManyCategoryInputEnvelope");
const TransactionCreateOrConnectWithoutCategoryInput_1 = require("../inputs/TransactionCreateOrConnectWithoutCategoryInput");
const TransactionCreateWithoutCategoryInput_1 = require("../inputs/TransactionCreateWithoutCategoryInput");
const TransactionWhereUniqueInput_1 = require("../inputs/TransactionWhereUniqueInput");
let TransactionCreateNestedManyWithoutCategoryInput = class TransactionCreateNestedManyWithoutCategoryInput {
};
exports.TransactionCreateNestedManyWithoutCategoryInput = TransactionCreateNestedManyWithoutCategoryInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateWithoutCategoryInput_1.TransactionCreateWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCategoryInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionCreateOrConnectWithoutCategoryInput_1.TransactionCreateOrConnectWithoutCategoryInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCategoryInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateManyCategoryInputEnvelope_1.TransactionCreateManyCategoryInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateManyCategoryInputEnvelope_1.TransactionCreateManyCategoryInputEnvelope)
], TransactionCreateNestedManyWithoutCategoryInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TransactionWhereUniqueInput_1.TransactionWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionCreateNestedManyWithoutCategoryInput.prototype, "connect", void 0);
exports.TransactionCreateNestedManyWithoutCategoryInput = TransactionCreateNestedManyWithoutCategoryInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionCreateNestedManyWithoutCategoryInput", {})
], TransactionCreateNestedManyWithoutCategoryInput);
