'use client';

import { usePathname, useRouter } from '@/routing';
import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiCheck, HiChevronDown } from 'react-icons/hi';
import Image from 'next/image';

const languages = [
  { id: 'en', name: 'English', flag: 'https://flagcdn.com/w20/us.png' },
  { id: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w20/sa.png' },
];

export const LanguageSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    const currentLanguage = languages.find((l) => l.id === locale) || languages[0];

    const switchLanguage = (newLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: newLocale as any });
        });
    };

    return (
        <div className="w-32">
            <Listbox value={locale} onChange={switchLanguage} disabled={isPending}>
                <div className="relative">
                    <ListboxButton className="relative w-full cursor-pointer rounded-lg bg-navy-light/20 py-2 pl-3 pr-10 text-left text-white shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm border border-white/10 hover:border-primary/50 transition-colors">
                        <span className="flex items-center gap-2 truncate">
                            <Image 
                                src={currentLanguage.flag} 
                                alt={currentLanguage.name} 
                                width={20} 
                                height={15} 
                                className="rounded-sm object-cover"
                            />
                            {currentLanguage.name}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiChevronDown
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-navy border border-white/10 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[100]">
                            {languages.map((lang) => (
                                <ListboxOption
                                    key={lang.id}
                                    className={({ active }) =>
                                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                            active ? 'bg-primary/20 text-primary' : 'text-white'
                                        }`
                                    }
                                    value={lang.id}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`flex items-center gap-2 truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                                <Image 
                                                    src={lang.flag} 
                                                    alt={lang.name} 
                                                    width={20} 
                                                    height={15} 
                                                    className="rounded-sm object-cover"
                                                />
                                                {lang.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                    <HiCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};
