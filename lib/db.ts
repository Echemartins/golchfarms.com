// lib/db.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = process.env.MONGODB_URI as string;

// if (!MONGODB_URI) {
//   throw new Error('Please define the MONGODB_URI environment variable in .env.local');
// }

// let cached = (global as any).mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
// if (!cached) cached = (global as any).mongoose = { conn: null, promise: null };

// export async function dbConnect() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// lib/db.ts
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in your env');


type MongooseCache = {
conn: typeof mongoose | null;
promise: Promise<typeof mongoose> | null;
};


declare global {
// eslint-disable-next-line no-var
var _mongoose: MongooseCache | undefined;
}


const globalCache: MongooseCache = global._mongoose || { conn: null, promise: null };
if (!global._mongoose) global._mongoose = globalCache;


export async function dbConnect(): Promise<typeof mongoose> {
if (globalCache.conn) return globalCache.conn;
if (!globalCache.promise) {
globalCache.promise = mongoose.connect(MONGODB_URI, { dbName: undefined }).then((m) => m);
}
globalCache.conn = await globalCache.promise;
return globalCache.conn;
}