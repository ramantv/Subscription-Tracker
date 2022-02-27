import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
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

/*
export const LOGIN = gql`
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
*/

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
