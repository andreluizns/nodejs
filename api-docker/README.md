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

insere, consulta registros através da api

a) é utilizado o framework fastify para o desenvolvimento do servidor.

- npm i fastify

b) é utilizada a extensão REST Client no VSCode para verificar os requests na api

- instalar a extensão REST Client no VSCode

- abrir o arquivo requisicoes.http (este arquivo é criado manualmente para que sejam inseridas as rotas as quais deseja-se verificar / obter as respostas )

- no arquivo requisicoes.http clicar em Send Request acima da rota desejada
