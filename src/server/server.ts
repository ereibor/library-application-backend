import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import express from "express";
import { typeDefs, resolvers } from "../graphql/schema";

export class Server {
  private server: ApolloServer;
  private app = express();
  private port: number;

  constructor() {
    this.port = Number(process.env.PORT) || 4000;

    this.server = new ApolloServer({
      typeDefs,
      resolvers,
    });
  }

  public async start() {
    try {
      // Start ApolloServer
      await this.server.start();

      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(expressMiddleware(this.server));
      this.app.listen(this.port, () => {
        console.log(`🚀 Server is running on http://localhost:${this.port}`);
      });
    } catch (error) {
      console.error("Failed to start the server:", error);
      process.exit(1);
    }
  }
}
