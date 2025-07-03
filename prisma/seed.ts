// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.course.create({
    data: {
      title: "Frontend Mastery",
      description: "Learn React, GraphQL, and more",
      modules: {
        create: [
          {
            title: "React Basics",
            lessons: {
              create: [
                { title: "JSX and Components", slug: "jsx-components" },
                { title: "State and Props", slug: "state-props" },
              ],
            },
          },
        ],
      },
    },
  });
}

main().finally(() => prisma.$disconnect());