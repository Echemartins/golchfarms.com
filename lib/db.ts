// lib/db.ts
import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in your env');


type MongooseCache = {
conn: typeof mongoose | null;
promise: Promise<typeof mongoose> | null;
};


declare global {
var _mongoose: MongooseCache | undefined;
}


const globalCache: MongooseCache = global._mongoose || { conn: null, promise: null };
if (!global._mongoose) global._mongoose = globalCache;


export async function dbConnect(): Promise<typeof mongoose> {
if (globalCache.conn) return globalCache.conn;
if (!globalCache.promise) {
globalCache.promise = mongoose.connect(MONGODB_URI).then((m) => m);
}
globalCache.conn = await globalCache.promise;
return globalCache.conn;
}