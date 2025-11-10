import {createClient} from 'redis';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    throw new Error("REDIS_URL environment variable is not set.");
}

// Configure the client
export const redis = createClient({
    url: redisUrl,
});

// Connect the client
redis.connect().catch(console.error);
