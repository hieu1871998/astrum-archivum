"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCreateNestedManyWithoutTagsInput_1 = require("../inputs/TransactionCreateNestedManyWithoutTagsInput");
let TagCreateInput = class TagCreateInput {
};
exports.TagCreateInput = TagCreateInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TransactionCreateNestedManyWithoutTagsInput_1.TransactionCreateNestedManyWithoutTagsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TransactionCreateNestedManyWithoutTagsInput_1.TransactionCreateNestedManyWithoutTagsInput)
], TagCreateInput.prototype, "transactions", void 0);
exports.TagCreateInput = TagCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateInput", {})
], TagCreateInput);
