"use strict";
/*
const http = require("node:http");

const server = http.createServer((request, response) => {
  response.write("hello");
  response.writableFinished();
});

server.listen("3333").on("listening", () => {
  console.log("server is running");
});

*/
/*
const fastify = require("fastify");

const crypto = require("crypto");
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const courses = [
    { id: "1", title: "curso de react" },
    { id: "2", title: "curso de react native" },
];
const server = (0, fastify_1.default)({
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
            },
        },
    },
});
server.get("/courses", () => {
    // sempre retorne um objeto
    return { courses };
});
/*
server.post("/courses", (request, response) => {
  type Body = {
    id: string;
    title: string;
  };

  const coursesID = crypto.randomUUID();
  const body = request.body as Body;

  if (!body) {
    return response.status(400).send("O título é obrigatório");
  }

  courses.push({ id: coursesID, title: body.title });

  // sempre retorne um objeto
  return response.status(201).send({ courses });
});
*/
server.get("/courses/:id", (request, response) => {
    const Params = request.params;
    const courseID = Params.id;
    const course = courses.find((course) => course.id === courseID);
    if (course) {
        return { course };
    }
    response.status(404).send("Registro não encontrado!");
});
server.post("/courses", (request, response) => {
    const courseID = node_crypto_1.default.randomUUID();
    const body = request.body;
    const courseTitle = body.title;
    if (courseTitle) {
        return response.status(400).send("O título é obrigatório");
    }
    courses.push({ id: courseID, title: courseTitle });
    return response.status(201).send({ courseID });
});
server.listen({ port: 3333 }).then(() => {
    console.log("server is running with fastify");
});
