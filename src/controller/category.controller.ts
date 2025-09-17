import type { FastifyReply, FastifyRequest } from "fastify";
import prisma from "../config/prisma";

export const getCategories = async (
	request: FastifyRequest,
	reply: FastifyReply,
): Promise<void> => {
	try {
		const categorie = await prisma.category.findMany({
			orderBy: {
				name: "asc",
			},
		});
        reply.send(categorie);
	} catch (err) {
        request.log.error(err);
        reply.status(500).send({ error: "Erro ao buscar categorias"})
    }
};
