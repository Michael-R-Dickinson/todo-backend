import { FastifyInstance } from "fastify"

// Routes that access data for a single user, rather than all users
const singleUserRoutes = (app: FastifyInstance) => {
  app.get<{ Params: { userId: string } }>("/", async (request, reply) => {
    const user = await app.prisma.user.findUnique({
      where: { id: request.params.userId },
    })
    reply.send({ user: JSON.stringify(user) })
  })
}

export default singleUserRoutes
