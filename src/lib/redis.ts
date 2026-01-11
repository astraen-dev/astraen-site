import { createClient, type RedisClientType } from 'redis';

declare global {
    var redis: RedisClientType | undefined;
}

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    throw new Error('REDIS_URL environment variable is not set.');
}

/**
 * Singleton factory for the Redis client.
 */
function createRedisClient(): RedisClientType {
    const client = createClient({
        url: redisUrl,
    });

    client.on('error', (err) => {
        console.error('Redis Client Error:', err);
    });

    return client as RedisClientType;
}

const redis = globalThis.redis ?? createRedisClient();

if (process.env.NODE_ENV !== 'production') {
    globalThis.redis = redis;
}

/**
 * Connection Management:
 * We do not call .connect() at the top level. Instead, we call this
 * in our API routes or Server Actions. This prevents the "Next.js Build"
 * phase from attempting to connect to Redis when it's not needed.
 */
export async function connectRedis() {
    if (!redis.isOpen) {
        try {
            await redis.connect();
        } catch (error) {
            console.error('Failed to connect to Redis:', error);
            throw error;
        }
    }
    return redis;
}

if (process.env.NODE_ENV === 'production') {
    const shutdown = async () => {
        if (redis.isOpen) {
            await redis.quit();
        }
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
}

export { redis };
