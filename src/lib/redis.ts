import 'server-only';
import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL;

if (!redisUrl) {
    throw new Error('REDIS_URL environment variable is not set.');
}

export const redis = new Redis(redisUrl);
