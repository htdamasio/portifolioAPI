import "reflect-metadata";

import * as dotenv from 'dotenv'
dotenv.config()
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql/dist/utils";
import { ResumeResolver } from "./resolvers/resume-resolver";
const cron = require('node-cron');

async function main() {
    const schema = await buildSchema({
        resolvers: [
            ResumeResolver
        ],
        // emitSchemaFile: 
    })

    const server = new ApolloServer({
        schema
    });
    const port = Number.parseInt(process.env.PORT) || 4000;
    const { url } = await server.listen(port)
    console.log(`🚀 Server ready at ${url}`)
    // githubDataFetch.start();
    // setTimeout(() => fetchDataFromGithub(), 1)
}

// Executed every day at 1AM
// const githubDataFetch = cron.schedule('0 0 1 * * *',
//     function fetchDataFromGithub() {
//         console.log('Will fetch data');
//         // fetch data from github and start another job to process this information and store in json files
//     });
main();