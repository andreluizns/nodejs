//const crypto = require("crypto");
//const fastify = require("fastify");

import crypto from "node:crypto";
import fastify from "fastify";

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

const courses = [
  { id: "1", name: "Node.js" },
  { id: "2", name: "React" },
  { id: "3", name: "React Native" },
];

server.get("/courses", async (request, reply) => {
  return { courses };
});

server.get("/courses/:id", async (request, reply) => {
  type Params = {
    id: string;
  };
  const params = request.params as Params;
  const courseID = params.id;
  const course = courses.find((course) => course.id === courseID);

  if (!course) {
    return reply.code(404).send({ message: "Curso não encontrado!" });
  }
  return { course };
});

server.post("/courses", async (request, reply) => {
  type Body = {
    title: string;
  };
  const body = request.body as Body;
  const courseID = crypto.randomUUID();
  const courseTitle = body.title;

  if (!courseTitle) {
    return reply
      .code(400)
      .send({ message: "O título do curso é obrigatório!" });
  }

  courses.push({ id: courseID, name: courseTitle });
  reply.code(201).send({ courses });
});

server.listen({ port: 3000 }).then(() => {
  console.log("Server is running on http://localhost:3000");
});
