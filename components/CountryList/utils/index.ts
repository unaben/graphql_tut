import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      name
      code
      emoji
    }
  }
`;