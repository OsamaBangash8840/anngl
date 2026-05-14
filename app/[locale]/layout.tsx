import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import type { Locale } from '@/routing';
import { Homemade_Apple, Inter } from "next/font/google";
import "@/app/styles/globals.css";


const homemadeApple = Homemade_Apple({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-homemade-apple",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sf-pro",
});

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;
    const messages = await getMessages();
    const t = await getTranslations({ locale, namespace: 'common' });
    const isRTL = locale === 'ar';

    return (
        <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${homemadeApple.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
            <head>
                <title>{t('appTitle')}</title>
            </head>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
