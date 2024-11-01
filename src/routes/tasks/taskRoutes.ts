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

      reply.send({ task: JSON.stringify(task) })
    }
  )
}

export default taskRoutes
