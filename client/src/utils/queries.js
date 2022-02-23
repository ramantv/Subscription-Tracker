import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      password
      subscriptionCount
      savedSubscriptions {
        _id
        subscriptionName
        price
      }
    }
  }
`;
