import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import expressGrapql from 'express-graphql';

import schema from './models';
import root from './controllers';

const app = express();

// Create an express server and a GraphQL endpoints

app.use('/graphql', expressGrapql({
  schema,
  rootValue: root,
  graphiql: true,
}));

// Connect mongodb
const db = mongoose.connect(
  'mongodb://localhost/food_app_menudb',
  { useNewUrlParser: true },
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log(`This server runing on port ${PORT}`));

export default app;
