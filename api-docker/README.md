# api-docker

uma api documentada desenvolvida com node, fastify e drizzle orm.

npm init -y

npm i fastify

npm i typescript @types/node -D

npx tsc --init

https://github.com/tsconfig/bases/blob/main/bases/node22.json

copiar o arquivo acima e substituir no arquivo tsconfig.json

mudar o arquivo server.js para server.ts

reiniciar o typescript: CTRL + SHIFT + P e selecionar TypeScript: Restart TS Server

no arquivo package.json, alterar para a linha abaixo caso dê erro
"dev": "node --watch --experimental-strip-types server.ts"

npm i pino-pretty

npm install dotenv

docker compose up -d

npm i drizzle-kit -D

npm i drizzle-orm pg

npm i zod fastify-provider-zod

npm i @fastify/swagger

npm i @fastify/swagger-ui

http://localhost:3333/docs
