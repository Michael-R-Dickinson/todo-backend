import Fastify from "fastify"
import prismaPlugin from "./plugins/prisma.ts"
import userRoutes from "./routes/userRoutes.ts"

const app = Fastify({
  logger: true,
})
app.register(prismaPlugin)

app.register(userRoutes)

app.get("/", async (request, reply) => {
  reply.send({ hello: "world" })
})

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
  }
})
