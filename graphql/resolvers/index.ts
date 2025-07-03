import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const resolvers = {
  Query: {
    courses: async () => prisma.course.findMany({ include: { modules: true } }),
    course: async (_: any, { id }: { id: string }) =>
      prisma.course.findUnique({ where: { id }, include: { modules: true } }),
    freelancers: async () => prisma.freelancerProfile.findMany(),
    me: async (_: any, __: any, context: any) => {
      const session = context.session;
      if (!session?.user?.email) return null;

      return prisma.user.findUnique({
        where: { email: session.user.email },
        include: {
          freelancer: true,
          enrollments: { include: { course: true } },
          completedLessons: { include: { lesson: true } },
        },
      });
    },
  },

  Mutation: {
    enroll: async (_: any, { courseId }: { courseId: string }, context: any) => {
      const session = context.session;
      if (!session?.user?.email) throw new Error("Not authenticated");

      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (!user) throw new Error("User not found");

      return prisma.enrollment.create({
        data: {
          courseId,
          userId: user.id,
        },
      });
    },

    completeLesson: async (_: any, { lessonId }: { lessonId: string }, context: any) => {
      const session = context.session;
      if (!session?.user?.email) throw new Error("Not authenticated");

      const user = await prisma.user.findUnique({ where: { email: session.user.email } });
      if (!user) throw new Error("User not found");

      return prisma.completedLesson.create({
        data: {
          lessonId,
          userId: user.id,
        },
      });
    },
  },

  Course: {
    modules: (parent: any) => prisma.module.findMany({ where: { courseId: parent.id } }),
  },
  Module: {
    lessons: (parent: any) => prisma.lesson.findMany({ where: { moduleId: parent.id } }),
  },
};
