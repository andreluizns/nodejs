import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

export const db = drizzle(
  process.env.DATABASE_URL ||
    "postgres://postgres:yourpassword@localhost:5432/yourdb"
);

/*
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { courses, users } from "./schema.ts";

// Configuração direta da conexão com o banco de dados
const connectionConfig = {
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "yourpassword",
  database: "yourdb",
};

// Criação da pool de conexões
const pool = new Pool(connectionConfig);

// Configuração do logger baseada em ambiente (opcional)
const isDevelopment = process.env.NODE_ENV === "development";

// Criação da instância do Drizzle ORM
export const db = drizzle(pool, {
  logger: true,
  schema: {
    // Certifique-se de importar e incluir todos os schemas aqui
    courses: courses,
    users: users,
  },
});

// Exportação da pool para gerenciamento explícito se necessário
export const databasePool = pool;

*/
