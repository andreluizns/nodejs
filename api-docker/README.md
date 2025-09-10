# api-docker

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
