// src/graphql/schema.ts
import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    grade: String!
    createdAt: String!
    updatedAt: String!
  }

  input CreateUserInput {
    name: String!
    email: String!
    password: String!
    role: String!
    grade: String!
  }

  type Query {
    users: [User!]!
  }
`;
