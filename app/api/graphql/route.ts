import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  introspection: true, // Enable for dev tools like Apollo Studio
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    const session = await getServerSession(req, res, authOptions);

    return {
      session,
      req,
      res,
    };
  },
});

export { handler as GET, handler as POST };
