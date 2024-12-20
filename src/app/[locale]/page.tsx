import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { InfoSection } from "@/components/home/info";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <main className="w-full flex-1">
        <HeroSection />
        <FeaturesSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
