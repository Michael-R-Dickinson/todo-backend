import { PrismaClient } from "@prisma/client"
import { seedUser1, seedUser2 } from "./helpers/seedData"

const seedDatabase = async () => {
  const prisma = new PrismaClient()
  await prisma.$connect()

  const user1 = await prisma.user.create({
    data: seedUser1,
  })
  const user2 = await prisma.user.create({
    data: seedUser2,
  })

  return { user1, user2 }
}

seedDatabase()
