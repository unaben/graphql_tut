import { gql } from "@apollo/client";

export const HELLO_QUERY = gql`
  query HelloQuery {
    hello
  }
`;

export const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      name
      code
      emoji
    }
  }
`;