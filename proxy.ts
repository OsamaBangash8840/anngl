import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for:
    // - API routes (/api/...)
    // - Next.js internals (/_next/...)
    // - Static files (files with extensions like .png, .ico, etc.)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
