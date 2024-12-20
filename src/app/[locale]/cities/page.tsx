import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import CitiesMainContent from '@/components/citites/main';
import TranslationsProvider from '@/components/layout/translations-provider';
import initTranslations from '@/app/i18n';

interface City {
  id: number;
  name: string;
  facilities: number;
  doctors: number;
  image: string;
}

const cities: City[] = [
  {
    id: 1,
    name: 'Baghdad',
    facilities: 15,
    doctors: 150,
    image: '/placeholder.svg',
  },
  {
    id: 2,
    name: 'Basra',
    facilities: 10,
    doctors: 100,
    image: '/placeholder.svg',
  },
  {
    id: 3,
    name: 'Mosul',
    facilities: 8,
    doctors: 80,
    image: '/placeholder.svg',
  },
  {
    id: 4,
    name: 'Erbil',
    facilities: 12,
    doctors: 120,
    image: '/placeholder.svg',
  },
  {
    id: 5,
    name: 'Najaf',
    facilities: 7,
    doctors: 70,
    image: '/placeholder.svg',
  },
  {
    id: 6,
    name: 'Karbala',
    facilities: 6,
    doctors: 60,
    image: '/placeholder.svg',
  },
];

const i18nNamespaces = ['header', 'footer', 'cities'];

export default async function CitiesPage(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mx-auto w-full max-w-6xl">
          <CitiesMainContent cities={cities} />
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
