"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecurrenceType = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RecurrenceType;
(function (RecurrenceType) {
    RecurrenceType["OFF"] = "OFF";
    RecurrenceType["REPEAT"] = "REPEAT";
    RecurrenceType["INSTALLMENT"] = "INSTALLMENT";
})(RecurrenceType || (exports.RecurrenceType = RecurrenceType = {}));
TypeGraphQL.registerEnumType(RecurrenceType, {
    name: "RecurrenceType",
    description: undefined,
});
