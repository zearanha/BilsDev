import type { FastifyInstance } from "fastify";
import { getCategories } from "../controller/category.controller";

export const categoryRoutes = async(fastify: FastifyInstance): Promise<void> => {
    fastify.get("/", getCategories);
}