"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCreatetransactionIdsInput_1 = require("../inputs/TagCreatetransactionIdsInput");
let TagCreateManyInput = class TagCreateManyInput {
};
exports.TagCreateManyInput = TagCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TagCreatetransactionIdsInput_1.TagCreatetransactionIdsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TagCreatetransactionIdsInput_1.TagCreatetransactionIdsInput)
], TagCreateManyInput.prototype, "transactionIds", void 0);
exports.TagCreateManyInput = TagCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateManyInput", {})
], TagCreateManyInput);
