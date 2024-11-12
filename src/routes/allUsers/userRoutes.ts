import { FastifyInstance } from "fastify"
import singleUserRoutes from "../user/singleUserRoutes"
import { UserCreateDTO } from "./allUsers.dto"
import taskRoutes from "../tasks/taskRoutes"

const allUsersRoutes = (app: FastifyInstance) => {
  app.register(singleUserRoutes, { prefix: "/:userId" })

  app.get("/", async (request, reply) => {
    const users = await app.prisma.user.findMany()
    reply.send(users)
  })

  app.post<{ Body: UserCreateDTO }>("/", async (request, reply) => {
    const user = await app.prisma.user.create({
      data: {
        email: request.body.email,
        name: request.body.name,
      },
    })

    reply.send(user)
  })
}

export default allUsersRoutes
