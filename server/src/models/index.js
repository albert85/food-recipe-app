import { buildSchema } from 'graphql';

// GRAPHQL Schema
const schema = buildSchema(`
   type Query {
     message: String
   }
 `);

export default schema;
