import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ path: ".env" });
import { ApolloServer } from "apollo-server-express";
import userSchema from "../models/userModel";
import { UserResolver } from "../resolvers/userResolver";

// Connexion à MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.error("Connexion à MongoDB échouée !" + error));


  const app = express();

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD"
    );
    next();
  });

  const server = new ApolloServer({
    typeDefs: userSchema,
    resolvers: [UserResolver],
    playground: true, // Activer GraphiQL pour tester les requêtes GraphQL dans le navigateur
  });
  
export default app;