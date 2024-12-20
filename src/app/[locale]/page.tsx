import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/home/hero';
import { FeaturesSection } from '@/components/home/features';
import { InfoSection } from '@/components/home/info';
import TranslationsProvider from '@/components/layout/translations-provider';
import initTranslations from '@/app/i18n';

const i18nNamespaces = ['header', 'footer', 'hero', 'info', 'features'];

export default async function Page(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <div className="flex min-h-screen flex-col items-center">
        <Header />
        <main className="w-full flex-1">
          <HeroSection />
          <FeaturesSection />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
