"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TransactionCountTagsArgs_1 = require("./args/TransactionCountTagsArgs");
let TransactionCount = class TransactionCount {
    getTags(root, args) {
        return root.tags;
    }
};
exports.TransactionCount = TransactionCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "tags",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TransactionCount, TransactionCountTagsArgs_1.TransactionCountTagsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TransactionCount.prototype, "getTags", null);
exports.TransactionCount = TransactionCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TransactionCount", {})
], TransactionCount);
