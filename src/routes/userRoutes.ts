import { FastifyInstance } from "fastify"

const userRoutes = (app: FastifyInstance) => {
  app.get("/users", async (request, reply) => {
    const users = await app.prisma.user.findMany()
    reply.send({ users: JSON.stringify(users) })
  })
}

export default userRoutes
