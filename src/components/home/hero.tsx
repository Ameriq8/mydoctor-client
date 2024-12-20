'use client';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

export function HeroSection() {
  const { t } = useTranslation('hero');

  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            {t('title')}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/80 md:text-xl">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3"
            >
              {t('view_projects')}
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {t('contact_me')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}