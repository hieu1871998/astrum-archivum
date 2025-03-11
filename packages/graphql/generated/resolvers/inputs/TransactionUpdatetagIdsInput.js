"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionUpdatetagIdsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TransactionUpdatetagIdsInput = class TransactionUpdatetagIdsInput {
};
exports.TransactionUpdatetagIdsInput = TransactionUpdatetagIdsInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdatetagIdsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TransactionUpdatetagIdsInput.prototype, "push", void 0);
exports.TransactionUpdatetagIdsInput = TransactionUpdatetagIdsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TransactionUpdatetagIdsInput", {})
], TransactionUpdatetagIdsInput);
