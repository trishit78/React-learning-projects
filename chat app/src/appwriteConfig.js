import { Client,Databases,Account } from 'appwrite';

export const PROJECT_ID='654f4f135eac133cd3fc'
export const DATABASE_ID='654f4febc57491e5aaf9'
export const COLLECTION_ID_MESSAGES='654f4ff562ce6d64632c'



const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('654f4f135eac133cd3fc');


export const databases = new Databases(client);
export const account = new Account(client);

    export default client;