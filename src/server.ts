import Fastify from "fastify"
import prismaPlugin from "./plugins/prisma.ts"
import allUsersRoutes from "./routes/allUsers/userRoutes.ts"
import taskRoutes from "./routes/tasks/taskRoutes.ts"

const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
})
app.register(prismaPlugin)

app.register(allUsersRoutes, { prefix: "/users" })
app.register(taskRoutes, { prefix: "/tasks" })

app.get("/", async (request, reply) => {
  reply.send({ hello: "world" })
})

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
  }
})
