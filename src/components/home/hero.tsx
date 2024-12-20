import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-purple-600 to-purple-700 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center text-white">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Iraqi Healthcare Facilities Directory
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-white/80 md:text-xl">
            Your trusted source for healthcare facilities across Iraq. Find
            hospitals, clinics, and medical services near you.
          </p>
          <div className="w-full max-w-2xl space-y-2">
            <div className="flex space-x-2">
              <div className="min-w-0 flex-1">
                <Input
                  className="w-full bg-white/10 text-white placeholder:text-white/60"
                  placeholder="Search for facilities, services, or specialties..."
                />
              </div>
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
