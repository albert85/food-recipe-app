import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';

import resolvers from './controllers';

const db = mongoose.connect(
  'mongodb://localhost/food_app_menudb',
  { useNewUrlParser: true },
);

const server = new GraphQLServer({
  typeDefs: './server/src/typedefs.graphql',
  resolvers,
  context: req => ({ ...req, db }),
});

server.start(() => console.log('Server running at localhost:4000'));
