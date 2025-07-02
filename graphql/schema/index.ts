import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Course {
    id: ID!
    title: String!
    modules: [Module!]!
  }

  type Module {
    id: ID!
    title: String!
    lessons: [Lesson!]!
  }

  type Lesson {
    id: ID!
    title: String!
    slug: String!
  }

  type Query {
    courses: [Course!]!
  }
`;
