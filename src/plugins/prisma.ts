import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import { PrismaClient } from "@prisma/client"

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

async function prismaPlugin(fastify: FastifyInstance, options: any) {
  const prisma = new PrismaClient()
  await prisma.$connect()

  fastify.decorate("prisma", prisma)

  fastify.addHook("onClose", async (instance) => {
    await instance.prisma.$disconnect()
  })
}

export default fp(prismaPlugin)
