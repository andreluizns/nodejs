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

const fastify = require("fastify");

const crypto = require("crypto");

const courses = [
  { id: 1, title: "curso de react" },
  { id: 2, title: "curso de react native" },
];

const server = fastify();

server.get("/courses", () => {
  // sempre retorne um objeto
  return { courses };
});

const coursesID = crypto.randomUUID();

server.post("/courses", (request, response) => {
  courses.push({ id: coursesID, title: "curso de javascript" });

  // sempre retorne um objeto
  response.status("201").send({ courses });
});

server.get("/courses/:id", (request, response) => {
  const courseID = Number(request.params.id);

  const course = courses.find((course) => course.id === courseID);

  if (course) {
    return { course };
  }

  response.status(404).send("Registro não encontrado!");
});

server.listen({ port: 3333 }).then(() => {
  console.log("server is running with fastify");
});
