"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCreateWithoutTransactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TagCreateWithoutTransactionsInput = class TagCreateWithoutTransactionsInput {
};
exports.TagCreateWithoutTransactionsInput = TagCreateWithoutTransactionsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateWithoutTransactionsInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TagCreateWithoutTransactionsInput.prototype, "name", void 0);
exports.TagCreateWithoutTransactionsInput = TagCreateWithoutTransactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TagCreateWithoutTransactionsInput", {})
], TagCreateWithoutTransactionsInput);
