const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
} = require('graphql');

// Mocked menu data
const menuData = {
  appetizers: [
    { name: 'Iceberg Wedge Salad', price: 7.50 },
    // ... other appetizers
  ],
  entrees: [
    { name: 'Farfalle Pasta with Braised Pork', price: 12.95 },
    // ... other entrees
  ],
  sandwiches: [
    { name: 'Turkey & Avocado', price: 7.95 },
    // ... other sandwiches
  ],
  // ... other menu categories
};

// Define types
const MenuItemType = new GraphQLObjectType({
  name: 'MenuItem',
  fields: () => ({
    name: { type: GraphQLString },
    price: { type: GraphQLString },
  }),
});

// Define queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAppetizers: {
      type: new GraphQLList(MenuItemType),
      resolve(parent, args) {
        return menuData.appetizers;
      },
    },
    getEntrees: {
      type: new GraphQLList(MenuItemType),
      resolve(parent, args) {
        return menuData.entrees;
      },
    },
    // Add more queries for other menu categories
  },
});

// Define the schema
const schema = new GraphQLSchema({
  query: RootQuery,
});

// Create Express server
const app = express();

// Use GraphQL middleware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable the GraphQL playground for testing
}));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
