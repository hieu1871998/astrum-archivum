"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdateManyWithWhereWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagScalarWhereInput_1 = require("../inputs/TagScalarWhereInput");
const TagUpdateManyMutationInput_1 = require("../inputs/TagUpdateManyMutationInput");
let TagUpdateManyWithWhereWithoutTransactionsInput = class TagUpdateManyWithWhereWithoutTransactionsInput {
};
exports.TagUpdateManyWithWhereWithoutTransactionsInput = TagUpdateManyWithWhereWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagScalarWhereInput_1.TagScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagScalarWhereInput_1.TagScalarWhereInput)
], TagUpdateManyWithWhereWithoutTransactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagUpdateManyMutationInput_1.TagUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TagUpdateManyMutationInput_1.TagUpdateManyMutationInput)
], TagUpdateManyWithWhereWithoutTransactionsInput.prototype, "data", void 0);
exports.TagUpdateManyWithWhereWithoutTransactionsInput = TagUpdateManyWithWhereWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdateManyWithWhereWithoutTransactionsInput", {})
], TagUpdateManyWithWhereWithoutTransactionsInput);
