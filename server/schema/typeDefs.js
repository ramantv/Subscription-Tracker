const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    subscriptionCount: Int
    subscriptions: [Subscription]
    watchList: [WatchList]
  }

  type Subscription {
    _id: ID
    name: String
    dateCreated: String
    price: Float
    tiered: Boolean
    url: String
    cardAlias: String
    billingCycle: Int
  }

  type WatchList {
    _id: ID
    name: String
    tmdbId: String
  }

  type Service {
    _id: ID
    name: String
    price: Float
    tiered: Boolean
    url: String
  }

  type DeleteServicePayload {
    message: String
    service: Service
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(_id: ID!): User
    users: [User]
    service(_id: ID!): Service
    services: [Service]
  }

  type Mutation {
    # User mutations
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      firstName: String
      email: String
      lastName: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    changePassword(password: String!): User
    addSubscription(
      name: String!
      dateCreated: String!
      price: Float!
      tiered: Boolean
      url: String
      cardAlias: String
      billingCycle: Int!
    ): User
    deleteSubscription(_id: ID!): User
    addToWatchList(name: String!, tmdbId: String!): User
    deleteFromWatchList(_id: ID!): User
    # Service mutations
    createService(
      name: String!
      price: Float!
      tiered: Boolean!
      url: String!
    ): Service
    deleteService(_id: ID!): DeleteServicePayload
    updateService(
      _id: ID!
      name: String
      price: Int
      tiered: Boolean
      url: String
    ): Service
  }
`;

module.exports = typeDefs;
