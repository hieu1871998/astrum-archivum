"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagUpdatetransactionIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagUpdatetransactionIdsInput = class TagUpdatetransactionIdsInput {
};
exports.TagUpdatetransactionIdsInput = TagUpdatetransactionIdsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdatetransactionIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TagUpdatetransactionIdsInput.prototype, "push", void 0);
exports.TagUpdatetransactionIdsInput = TagUpdatetransactionIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagUpdatetransactionIdsInput", {})
], TagUpdatetransactionIdsInput);
