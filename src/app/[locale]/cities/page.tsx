"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Search, Building, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const cities = [
  {
    id: 1,
    name: "Baghdad",
    facilities: 15,
    doctors: 150,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Basra",
    facilities: 10,
    doctors: 100,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Mosul",
    facilities: 8,
    doctors: 80,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Erbil",
    facilities: 12,
    doctors: 120,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Najaf",
    facilities: 7,
    doctors: 70,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Karbala",
    facilities: 6,
    doctors: 60,
    image: "/placeholder.svg",
  },
];

export default function CitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <motion.h1
          className="mb-6 text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Cities
        </motion.h1>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative max-w-md">
            <Input
              type="search"
              placeholder="Search cities..."
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredCities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={city.image}
                    alt={`${city.name} cityscape`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                    {city.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-2 flex items-center">
                    <Building className="mr-2 h-4 w-4 text-gray-500" />
                    {city.facilities} Healthcare Facilities
                  </p>
                  <p className="flex items-center">
                    <User className="mr-2 h-4 w-4 text-gray-500" />
                    {city.doctors} Doctors
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/cities/${city.id}`} className="w-full">
                    <Button className="w-full">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
