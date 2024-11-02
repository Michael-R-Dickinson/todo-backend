import { FastifyInstance } from "fastify"
import taskRoutes from "../tasks/taskRoutes"
import { UserQueryDTO } from "../allUsers/allUsers.dto"

// Routes that access data for a single user, rather than all users
const singleUserRoutes = (app: FastifyInstance) => {
  app.register(taskRoutes, { prefix: "/tasks" })

  app.get<{ Params: UserQueryDTO }>("/", async (request, reply) => {
    const user = await app.prisma.user.findUnique({
      where: { id: request.params.userId },
    })
    reply.send(user)
  })
}

export default singleUserRoutes
