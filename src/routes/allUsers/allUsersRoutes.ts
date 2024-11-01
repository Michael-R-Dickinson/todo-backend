import { FastifyInstance } from "fastify"
import singleUserRoutes from "../user/userRoutes"

const allUsersRoutes = (app: FastifyInstance) => {
  app.register(singleUserRoutes, { prefix: "/:userId" })

  app.get("/", async (request, reply) => {
    const users = await app.prisma.user.findMany()
    reply.send({ users: JSON.stringify(users) })
  })

  app.post<{ Body: UserCreateDTO }>("/", async (request, reply) => {
    const user = await app.prisma.user.create({
      data: {
        email: request.body.email,
        name: request.body.name,
      },
    })

    reply.send({ user: JSON.stringify(user) })
  })
}

export default allUsersRoutes
