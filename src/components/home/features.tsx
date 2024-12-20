import { MapPin, Star, Globe2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose MyDoctor.IQ?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <MapPin className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Location-Based Search</h3>
            <p className="text-gray-500">
              Find healthcare facilities in your city with ease using our
              advanced location filters.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Verified Reviews</h3>
            <p className="text-gray-500">
              Read authentic patient reviews and ratings to make informed
              decisions about your healthcare.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4">
              <Globe2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Multilingual Support</h3>
            <p className="text-gray-500">
              Access information in English, Arabic, and Kurdish to serve Iraq's
              diverse population.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
