const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user: User
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, email: String, lastName: String, password: String): Auth
    login(email: String!, password: String!): Auth
    changePassword(password: String): User
  }
`;

module.exports = typeDefs;
