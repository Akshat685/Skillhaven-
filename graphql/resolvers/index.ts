import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    courses: async () => prisma.course.findMany({
      include: {
        modules: {
          include: { lessons: true }
        }
      }
    }),
  },
};
