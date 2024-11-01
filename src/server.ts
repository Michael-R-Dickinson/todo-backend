import Fastify from "fastify"
import prismaPlugin from "./plugins/prisma.ts"
import allUsersRoutes from "./routes/allUsers/allUsersRoutes.ts"

const app = Fastify({
  logger: true,
})
app.register(prismaPlugin)

app.register(allUsersRoutes, { prefix: "/users" })

app.get("/", async (request, reply) => {
  reply.send({ hello: "world" })
})

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
  }
})
