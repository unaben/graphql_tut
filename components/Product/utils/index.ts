import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query Product($id: ID!) {
    product(id: $id) {
      name
      description
      price
      quantity
      id
      image
      onSale
      reviews {
        rating
        title
        date
        comment
      }
    }
  }
`;
