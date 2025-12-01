import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "../schema/typeDefs";
import { categories, products, reviews } from "@/db";
import { Category, Product, Query, Mutation } from "../resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Category,
    Product,
    Query,
    Mutation,
  },
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res, products, categories, reviews }),
});

export { handler as GET, handler as POST };
