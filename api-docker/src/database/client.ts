import { drizzle } from "drizzle-orm/node-postgres";

const banco = "postgresql://postgres:password@localhost:5432/mydb";
export const db = drizzle(banco);
