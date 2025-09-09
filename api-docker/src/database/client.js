"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var node_postgres_1 = require("drizzle-orm/node-postgres");
var banco = "postgresql://postgres:password@localhost:5432/mydb";
exports.db = (0, node_postgres_1.drizzle)(banco);
