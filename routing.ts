import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation'; // ← changed

export const routing = defineRouting({
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localePrefix: 'always',
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing); // ← changed