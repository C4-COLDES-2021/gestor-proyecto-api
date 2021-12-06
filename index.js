import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import conectarBD from './db/db.js';
import dotenv from 'dotenv';
import { tipos } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';

dotenv.config();


const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
});


const app = express();

//middleware respuestas request en formato json
app.use(express.json());

//request desde muchos origenes
app.use(cors());

//Prender del servidor
app.listen({ port: process.env.PORT || 4000 }, async () => {
    await conectarBD();
    await server.start();

    //usar los Middleware de Express
    server.applyMiddleware({ app });

    console.log('servidor listo');
});
