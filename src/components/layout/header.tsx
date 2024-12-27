'use client';
import Link from 'next/link';
import { Sun, LogOut, User2, Settings, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const navItems = [
  { href: '/cities', label: 'Cities' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/specialties', label: 'Specialties' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const { i18n, t } = useTranslation('header');
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: string) => {
    console.log('newLocale', newLocale);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    router.refresh();
  };

  return (
    <header className="flex h-20 w-full items-center justify-center bg-white px-4 text-gray-800 shadow-md lg:px-6">
      <div className="container mx-auto flex max-w-6xl items-center justify-between">
        <Link
          className="flex items-center justify-center transition-colors hover:text-purple-600"
          href="/"
        >
          <span className="ml-2 text-xl font-bold">MyDoctor.IQ</span>
        </Link>
        <nav className="flex flex-1 items-center justify-center">
          {navItems.map((item, i) => (
            <Link
              key={i}
              className="text-sm font-medium transition-colors mx-[24] hover:text-purple-600"
              href={item.href}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="mr-3 h-10 w-10">
                  <AvatarImage src="/avatars/01.png" alt="@user" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                    <User2 className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-64 rounded-lg border border-gray-200 bg-white p-2 shadow-lg"
              align="end"
            >
              <DropdownMenuLabel className="flex items-center p-2">
                <Avatar className="mr-3 h-10 w-10">
                  <AvatarImage src="/avatars/01.png" alt="@user" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                    <User2 className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-xs text-gray-500">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="flex items-center rounded-md p-2 transition-colors hover:bg-purple-50">
                <User2 className="mr-3 h-4 w-4 text-purple-600" />
                <span>{t('Profile')}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center rounded-md p-2 transition-colors hover:bg-purple-50">
                <Settings className="mr-3 h-4 w-4 text-purple-600" />
                <span>{t('Settings')}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="flex items-center rounded-md p-2 transition-colors hover:bg-purple-50">
                <Languages className="mr-3 h-4 w-4 text-purple-600" />
                <Select defaultValue={currentLocale} onValueChange={(v) => handleChange(v)}>
                  <SelectTrigger className="w-full border-none p-0 text-left focus:ring-0">
                    <SelectValue placeholder="Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">{t('English')}</SelectItem>
                    <SelectItem value="ar">{t('العربية')}</SelectItem>
                  </SelectContent>
                </Select>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center rounded-md p-2 transition-colors hover:bg-purple-50">
                <Sun className="mr-3 h-4 w-4 text-purple-600" />
                <span>{t('Toggle_theme')}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="flex items-center rounded-md p-2 text-red-600 transition-colors hover:bg-purple-50">
                <LogOut className="mr-3 h-4 w-4" />
                <span>{t('Log_out')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
