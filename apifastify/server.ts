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

import fastify from "fastify";

import crypto from "node:crypto";
import { type } from "node:os";
import { title } from "node:process";

const courses = [
  { id: "1", title: "curso de react" },
  { id: "2", title: "curso de react native" },
];

const server = fastify({
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
  type Params = {
    id: string;
  };

  const Params = request.params as Params;
  const courseID = Params.id;

  const course = courses.find((course) => course.id === courseID);

  if (course) {
    return { course };
  }

  response.status(404).send("Registro não encontrado!");
});

server.post("/courses", (request, response) => {
  type Body = {
    id: string;
    title: string;
  };

  const courseID = crypto.randomUUID();
  const body = request.body as Body;

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
