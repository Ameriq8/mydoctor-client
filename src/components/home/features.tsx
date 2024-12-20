'use client';
import { Globe2, MapPin, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function FeaturesSection() {
  const { t } = useTranslation('features');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {t('Why_Choose_Us')}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">{t('Feature_Location')}</h3>
            <p className="text-gray-500">{t('Feature_Location_Desc')}</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">{t('Feature_Reviews')}</h3>
            <p className="text-gray-500">{t('Feature_Reviews_Desc')}</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <Globe2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">{t('Feature_Languages')}</h3>
            <p className="text-gray-500">{t('Feature_Languages_Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
