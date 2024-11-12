import { FastifyInstance } from "fastify"
import { UserQueryDTO } from "../allUsers/allUsers.dto"
import { TaskCreateDTO } from "./taskRoutesDTO"

const taskRoutes = (app: FastifyInstance) => {
  app.post<{ Params: UserQueryDTO; Body: TaskCreateDTO }>(
    "/",
    async (request, reply) => {
      const task = await app.prisma.task.create({
        data: {
          userId: request.params.userId,
          ...request.body,
        },
      })

      reply.send(task)
    }
  )

  app.get<{ Params: UserQueryDTO }>("/", async (request, reply) => {
    const tasks = await app.prisma.task.findMany({
      where: { userId: request.params.userId },
    })

    reply.send(tasks)
  })
}

export default taskRoutes
