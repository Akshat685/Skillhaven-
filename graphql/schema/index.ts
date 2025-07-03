import { gql } from "apollo-server-core";

export const schema = gql`
  type Course {
    id: ID!
    title: String!
    modules: [Module!]
  }

  type Module {
    id: ID!
    title: String!
    courseId: ID!
    lessons: [Lesson!]
  }

  type Lesson {
    id: ID!
    title: String!
    slug: String!
    moduleId: ID!
  }

  type FreelancerProfile {
    id: ID!
    bio: String!
    skills: [String!]!
    userId: ID!
  }

  type User {
    id: ID!
    name: String
    email: String
    freelancer: FreelancerProfile
    enrollments: [Enrollment!]
    completedLessons: [CompletedLesson!]
  }

  type Enrollment {
    id: ID!
    courseId: ID!
    userId: ID!
    course: Course
  }

  type CompletedLesson {
    id: ID!
    lessonId: ID!
    userId: ID!
    lesson: Lesson
  }

  type Query {
    courses: [Course!]
    course(id: ID!): Course
    freelancers: [FreelancerProfile!]
    me: User
  }

  type Mutation {
    enroll(courseId: ID!): Enrollment
    completeLesson(lessonId: ID!): CompletedLesson
  }
`;
