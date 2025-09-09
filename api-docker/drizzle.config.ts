import { defineConfig } from "drizzle-kit";

//const DATABASE_URL = "postgresql://postgres:yourpassword@localhost:5432/yourdb";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
  out: "./drizzle",
  schema: "./src/database/schema.ts",
});
