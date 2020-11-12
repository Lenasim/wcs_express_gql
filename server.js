const express = require('express');
// const express_graphql = require('express-graphql');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);

// Root resolver
var root = {
  message: () => 'Hello World!',
};

const app = express();

// remplace express_graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () =>
  console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
);
