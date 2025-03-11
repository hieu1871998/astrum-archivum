"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AccountType_1 = require("../../enums/AccountType");
const Currency_1 = require("../../enums/Currency");
let AccountCreateManyInput = class AccountCreateManyInput {
};
exports.AccountCreateManyInput = AccountCreateManyInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AccountType_1.AccountType, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Currency_1.Currency, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AccountCreateManyInput.prototype, "currency", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateManyInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], AccountCreateManyInput.prototype, "updatedAt", void 0);
exports.AccountCreateManyInput = AccountCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AccountCreateManyInput", {})
], AccountCreateManyInput);
