import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      email
      firstName
      lastName
      password
      subscriptionCount
      subscriptions {
        _id
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
