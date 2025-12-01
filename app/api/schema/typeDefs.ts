import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    products(filter: FilteredProduct): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    reviews: [Review!]!
    review(id: ID!): Review
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category!
    addProduct(input: AddProductInput) : Product!
    addReview(input: AddReviewInput): Review!
    updateReview(id: ID!, input: UpdateReviewInput!) : Review!
    updateCategory(id: ID!, input: UpdateCategoryInput!) : Category!
    updateProduct(id: ID!, input: UpdateProductInput!) : Product!
    deleteCategory(id: ID!) : Boolean!
    deleteProduct(id: ID!) : Boolean!
    deleteReview(id: ID!) : Boolean!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID
    reviews: [Review!]!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
    products(filter: FilteredProduct): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

  input FilteredProduct {
    onSale: Boolean
  }

  input AddCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String!
  }

  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
  }

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }

   input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }

  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;
