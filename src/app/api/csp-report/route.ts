import { NextRequest, NextResponse } from 'next/server';
import { redis, connectRedis } from '@/lib/redis';
import { nanoid } from 'nanoid';

const REPORT_TTL_SECONDS = 1_209_600;

export async function POST(request: NextRequest) {
    try {
        await connectRedis();

        const report = await request.json();
        const reportId = nanoid();
        const key = `csp-report:${reportId}`;

        await redis.set(key, JSON.stringify(report), {
            EX: REPORT_TTL_SECONDS,
        });

        return new NextResponse(null, { status: 204 });
    } catch (error) {
        if (error instanceof SyntaxError) {
            return new NextResponse('Bad Request: Invalid JSON body.', {
                status: 400,
            });
        }
        console.error('Error processing CSP report:', error);
        return new NextResponse('Internal Server Error.', { status: 500 });
    }
}
