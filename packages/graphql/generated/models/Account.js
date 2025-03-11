"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountType_1 = require("../enums/AccountType");
const Currency_1 = require("../enums/Currency");
const AccountCount_1 = require("../resolvers/outputs/AccountCount");
let Account = class Account {
};
exports.Account = Account;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Account.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Account.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountCount_1.AccountCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AccountCount_1.AccountCount)
], Account.prototype, "_count", void 0);
exports.Account = Account = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Account", {})
], Account);
