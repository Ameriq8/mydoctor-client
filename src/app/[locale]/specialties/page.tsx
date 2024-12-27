import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import SpecialtiesMainContent from "@/components/specialties/main";
import TranslationsProvider from "@/components/layout/translations-provider";
import initTranslations from "@/app/i18n";
import { Specialty } from "@/utils/interfaces";

const specialties: Specialty[] = [
  {
    id: 1,
    name: "Cardiology",
    doctors: 25,
    patients: 1500,
    description: "Deals with disorders of the heart and blood vessels",
  },
  {
    id: 2,
    name: "Neurology",
    doctors: 20,
    patients: 1200,
    description: "Focuses on disorders of the nervous system",
  },
  {
    id: 3,
    name: "Pediatrics",
    doctors: 30,
    patients: 2000,
    description: "Provides medical care for infants, children, and adolescents",
  },
  {
    id: 4,
    name: "Orthopedics",
    doctors: 15,
    patients: 1000,
    description: "Concentrates on injuries and diseases of the musculoskeletal system",
  },
  {
    id: 5,
    name: "Dermatology",
    doctors: 10,
    patients: 800,
    description: "Specializes in conditions involving the skin, hair, and nails",
  },
  {
    id: 6,
    name: "Ophthalmology",
    doctors: 12,
    patients: 900,
    description: "Deals with the anatomy, physiology and diseases of the eye",
  },
];

const i18nNamespaces = ["header", "footer", "specialties"];

export default async function SpecialtiesPage(props: { params: { locale: string } }) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <SpecialtiesMainContent specialties={specialties} />
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
