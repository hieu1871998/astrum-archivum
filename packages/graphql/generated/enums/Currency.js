"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
})(Currency || (exports.Currency = Currency = {}));
TypeGraphQL.registerEnumType(Currency, {
    name: "Currency",
    description: undefined,
});
