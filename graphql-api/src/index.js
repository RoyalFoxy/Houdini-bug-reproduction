import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import express from 'express';

import schema from './schema.js';
import resolvers from './resolver.js';

const app = express();

const server = new ApolloServer({
	typeDefs: schema,
	resolvers
});

await server.start();

app.use('/graphql', cors(), express.json(), expressMiddleware(server));

app.listen(4000)
