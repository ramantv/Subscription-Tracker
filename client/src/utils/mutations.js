import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

// calling this LOGIN_USER just in case we need to add administrator login functionality later
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_SUBSCRIPTION = gql`
  mutation addSubscription(
    $name: String!
    $price: Int
    $tiered: Boolean
    $url: String
    $cardAlias: String
    $billingCycle: Int!
  ) {
    addSubscription(
      name: $name
      price: $price
      tiered: $tiered
      url: $url
      cardAlias: $cardAlias
      billingCycle: $billingCycle
    ) {
      _id
      firstName
      lastName
      email
      subscriptionCount
      subscriptions {
        name
        price
        tiered
        url
        cardAlias
        billingCycle
      }
    }
  }
`;

export const DELETE_SUBSCRIPTION = gql`
  mutation deleteSubscription($_id: ID!) {
    deleteSubscription(_id: $_id) {
      _id
      firstName
      lastName
      email
      subscriptionCount
      subscriptions {
        _id
        name
        price
        tiered
        cardAlias
      }
    }
  }
`;

export const ADD_TO_WATCH_LIST = gql`
  mutation addToWatchList($name: String!, $tmdbId: String!) {
    addToWatchList(name: $name, tmdbId: $tmdbId) {
      firstName
      lastName
      email
      watchList {
        _id
        name
        tmdbId
      }
    }
  }
`;

export const DELETE_FROM_WATCH_LIST = gql`
  mutation deleteFromWatchList($_id: ID!) {
    deleteFromWatchList(_id: $_id) {
      firstName
      lastName
      email
      watchList {
        _id
        name
        tmdbId
      }
    }
  }
`;
