"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Building, User, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const cityData = {
  id: 1,
  name: "Baghdad",
  image: "/placeholder.svg?height=400&width=800",
  description:
    "Baghdad, the capital of Iraq, is a vibrant city with a rich history and modern healthcare facilities.",
  population: "7.5 million",
  facilities: [
    {
      id: 1,
      name: "Baghdad General Hospital",
      type: "Public Hospital",
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: "Al-Kindy Teaching Hospital",
      type: "Teaching Hospital",
      rating: 4.3,
      reviews: 95,
    },
    {
      id: 3,
      name: "Ibn Al-Nafees Hospital",
      type: "Private Hospital",
      rating: 4.7,
      reviews: 150,
    },
  ],
  doctors: [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 85,
    },
    {
      id: 2,
      name: "Dr. Fatima Ali",
      specialty: "Pediatrician",
      rating: 4.9,
      reviews: 110,
    },
    {
      id: 3,
      name: "Dr. Mohammed Khalid",
      specialty: "Orthopedic Surgeon",
      rating: 4.7,
      reviews: 75,
    },
  ],
};

export default function CityPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the city data based on the id
  const city = cityData;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-8 h-64 overflow-hidden rounded-xl">
            <Image
              src={city.image}
              alt={`${city.name} cityscape`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end bg-black bg-opacity-50">
              <div className="p-6">
                <h1 className="mb-2 text-4xl font-bold text-white">
                  {city.name}
                </h1>
                <p className="text-lg text-white">{city.description}</p>
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Capital of Iraq</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5 text-purple-600" />
                  Population
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{city.population}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building className="mr-2 h-5 w-5 text-purple-600" />
                  Healthcare Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{city.facilities.length} major hospitals</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="facilities" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="facilities">
                Healthcare Facilities
              </TabsTrigger>
              <TabsTrigger value="doctors">Top Doctors</TabsTrigger>
            </TabsList>
            <TabsContent value="facilities">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {city.facilities.map((facility) => (
                  <Card
                    key={facility.id}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle>{facility.name}</CardTitle>
                      <CardDescription>{facility.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-yellow-400" />
                        {facility.rating} ({facility.reviews} reviews)
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/facilities/${facility.id}`}
                        className="w-full"
                      >
                        <Button className="w-full">View Details</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="doctors">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {city.doctors.map((doctor) => (
                  <Card
                    key={doctor.id}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle>{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center">
                        <Star className="mr-2 h-4 w-4 text-yellow-400" />
                        {doctor.rating} ({doctor.reviews} reviews)
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/doctors/${doctor.id}`} className="w-full">
                        <Button className="w-full">View Profile</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
