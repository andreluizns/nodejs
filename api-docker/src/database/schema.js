"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courses = exports.users = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)().notNull(),
    email: (0, pg_core_1.text)().notNull().unique(),
});
exports.courses = (0, pg_core_1.pgTable)("courses", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    title: (0, pg_core_1.text)().notNull().unique(),
    description: (0, pg_core_1.text)().notNull(),
});
