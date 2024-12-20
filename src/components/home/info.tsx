import Link from "next/link";

export function InfoSection() {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Comprehensive Healthcare Information
            </h2>
            <p className="text-gray-500 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Access detailed profiles of healthcare facilities including
              contact information, specialties, medical equipment, and services
              provided. Make informed decisions about your healthcare journey.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Browse Facilities
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-4">
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <div className="font-medium">
                  Detailed contact information and locations
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <div className="font-medium">
                  List of available medical specialties
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <div className="font-medium">
                  Information about medical equipment
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <div className="font-medium">
                  Medical team profiles and qualifications
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-purple-600" />
                <div className="font-medium">
                  Available services and departments
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
