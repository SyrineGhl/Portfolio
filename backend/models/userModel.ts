import { buildSchema } from "graphql";

const userSchema = buildSchema(`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(username: String!, email: String!): User
  }
`);

export default userSchema;
