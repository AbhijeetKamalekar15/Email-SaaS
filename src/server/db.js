"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var client_1 = require("@prisma/client");
var env_1 = require("@/env");
var createPrismaClient = function () {
    return new client_1.PrismaClient({
        log: env_1.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
    });
};
var globalForPrisma = globalThis;
exports.db = (_a = globalForPrisma.prisma) !== null && _a !== void 0 ? _a : createPrismaClient();
if (env_1.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.db;
