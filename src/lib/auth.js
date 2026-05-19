import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

let client;
let db;

function getDb() {
  if (!client) {
    if (!process.env.MONGO_URI) throw new Error("MONGO_URI is not set");
    client = new MongoClient(process.env.MONGO_URI);
    db = client.db("mentora");
  }
  return { client, db };
}

const { client: mongoClient, db: mongoDB } = getDb();

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(mongoDB, {
    client: mongoClient,
  }),
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 5 * 24 * 60 * 60,
    },
  },
  plugins: [jwt()],
});