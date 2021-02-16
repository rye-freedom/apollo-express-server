// Application imports: Express, Apollo
const express = require('express');
const ApolloServer = require('apollo-server-express').ApolloServer;

// GraphQL imports for the data graph
const schema = require('./schema');
const resolvers = require('./resolvers');
const data = require('./data');

// Instantiate the Express App
const app = express();

// Instantiate the Apollo Server
const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  context: {
    data,
  },
  introspection: true,
  playground: true
});

// Configure Apollo Server Middlewares (body parsing, GraphQL Playground, etc)
// Documented at: https://www.apollographql.com/docs/apollo-server/integrations/middleware/
server.applyMiddleware({ app, path: '/graphql' });

// Start the engines!
app.listen({ port: 3000 }, () => {
  console.log('Apollo Server on http://localhost:3000/graphql');
});