import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/components/layout/translations-provider';
import MainContent from '@/components/about/main';

const i18nNamespaces = ['header', 'footer', 'about'];

export default async function AboutPage(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
