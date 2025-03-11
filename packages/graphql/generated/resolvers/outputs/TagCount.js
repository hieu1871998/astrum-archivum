"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TagCountTransactionsArgs_1 = require("./args/TagCountTransactionsArgs");
let TagCount = class TagCount {
    getTransactions(root, args) {
        return root.transactions;
    }
};
exports.TagCount = TagCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "transactions",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [TagCount, TagCountTransactionsArgs_1.TagCountTransactionsArgs]),
    tslib_1.__metadata("design:returntype", Number)
], TagCount.prototype, "getTransactions", null);
exports.TagCount = TagCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TagCount", {})
], TagCount);
