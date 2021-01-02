const { ApolloServer, PubSub  } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/types/typeDefs');
const resolvers = require('./graphql/resolvers/index');
const { mongoURI } = require('./config/keys');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
})

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