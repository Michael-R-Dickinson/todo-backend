import { FastifyInstance } from "fastify"
import { UserQueryDTO } from "../allUsers/allUsers.dto"
import { TaskCreateDTO } from "./tasks.dto"
import { PrismaClient } from "@prisma/client"
import singleTaskRoutes from "./singleTaskRoutes"

export const ensureUserExists = async (
  userId: string,
  prisma: PrismaClient
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  })
  return Boolean(user)
}

const taskRoutes = (app: FastifyInstance) => {
  app.register(singleTaskRoutes, { prefix: "/:taskId" })

  app.get<{ Params: UserQueryDTO }>("/", async (request, reply) => {
    if (!(await ensureUserExists(request.params.userId, app.prisma))) {
      reply.status(404).send({ error: "User not found" })
      return
    }

    const tasks = await app.prisma.task.findMany({
      where: { userId: request.params.userId },
    })

    reply.send(tasks)
  })

  app.post<{ Params: UserQueryDTO; Body: TaskCreateDTO }>(
    "/:taskId",
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
}

export default taskRoutes
