import { FastifyInstance } from "fastify"
import { TaskQueryDTO } from "./tasks.dto"

const singleTaskRoutes = (app: FastifyInstance) => {
  app.get<{ Params: TaskQueryDTO }>("/", async (request, reply) => {
    const task = await app.prisma.task.findUnique({
      where: {
        userId: request.params.userId,
        id: request.params.taskId,
      },
    })
    reply.send(task)
  })
}

export default singleTaskRoutes
