import gql from "graphql-tag";

const GET_MY_TRIPS = gql` query GET_MY_TRIPS
  {
    self
    {
      email,
      firstName,
      lastName,
    }

  }
`;

export default GET_MY_TRIPS;
