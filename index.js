import { GraphQLServer, PubSub } from 'graphql-yoga'
import { Query } from './resolvers/Query.js'
import { Student } from './resolvers/Student.js'
import { User } from './resolvers/User.js'
import { Todo } from './resolvers/Todo.js'
import { db } from './data/db.js'
import { Mutation } from './resolvers/Mutation.js'
import { Subscription } from './resolvers/Subscription.js'


const typeDefs = "schema/schema.graphql";
const resolvers = {
    Query,
    Student,
    User,
    Todo,
    Mutation,
    Subscription
};

const pubsub = new PubSub();
const context =  {
    db,
    pubsub
};
const server = new GraphQLServer({ typeDefs, resolvers,context })
server.start(() => console.log('Server is running on localhost:4000'))
