import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../database/client.ts";
import { courses } from "../database/schema.ts";
import z from "zod";

export const createCourseRoute: FastifyPluginAsyncZod = async (server) => {
  server.post(
    "/courses",
    {
      schema: {
        body: z.object({
          title: z
            .string()
            .min(3, "O titulo precisa ter no mínimo 3 caracteres"),
        }),
      },
    },
    async (request, response) => {
      const courseTitle = request.body.title;

      if (!courseTitle) {
        return response.status(400).send("O título é obrigatório");
      }

      const result = await db
        .insert(courses)
        .values({
          title: courseTitle,
          description: "Descrição padrão",
        })
        .returning();

      return response.status(201).send({ courseID: result[0].title });
    }
  );
};
