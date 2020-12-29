const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = gql `
    type Query {
        sayHi : String!
    }
`
const resolvers = {
    Query: {
        sayHi:() => 'Hello World'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

/* DataBase Config */
const { mongoURI } = require('./config/keys');

/* Connect to MongoDB */
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB Connected')
        return server.listen({ port: 5000 });
    }) 
    .then(res => {
        console.log(`Server running at ${res.url}`);
    }) 
    .catch(err => console.log(err));