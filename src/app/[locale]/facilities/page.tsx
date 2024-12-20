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
import { MapPin, Phone, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const facilities = [
  {
    id: 1,
    name: "Baghdad General Hospital",
    type: "Public Hospital",
    city: "Baghdad",
    location: "Bab Al-Muadham, Baghdad",
    phone: "+964 123 456 7890",
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: "Al-Kindy Teaching Hospital",
    type: "Teaching Hospital",
    city: "Baghdad",
    location: "Palestine Street, Baghdad",
    phone: "+964 123 456 7891",
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 3,
    name: "Basra Children's Hospital",
    type: "Children's Hospital",
    city: "Basra",
    location: "Al-Bradhiya, Basra",
    phone: "+964 123 456 7892",
    rating: 4.7,
    reviews: 150,
  },
  {
    id: 4,
    name: "Erbil Heart Center",
    type: "Specialized Hospital",
    city: "Erbil",
    location: "Gulan Street, Erbil",
    phone: "+964 123 456 7893",
    rating: 4.8,
    reviews: 80,
  },
  {
    id: 5,
    name: "Mosul Rehabilitation Center",
    type: "Rehabilitation Center",
    city: "Mosul",
    location: "Al-Shifaa, Mosul",
    phone: "+964 123 456 7894",
    rating: 4.2,
    reviews: 60,
  },
  {
    id: 6,
    name: "Najaf Medical City",
    type: "Medical Complex",
    city: "Najaf",
    location: "Kufa Road, Najaf",
    phone: "+964 123 456 7895",
    rating: 4.6,
    reviews: 110,
  },
];

export default function FacilitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFacilities = facilities.filter(
    (facility) =>
      facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(searchTerm.toLowerCase()),
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
          Healthcare Facilities
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
              placeholder="Search facilities..."
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
          {filteredFacilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <CardTitle>{facility.name}</CardTitle>
                  <CardDescription>{facility.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-2 flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> {facility.city},{" "}
                    {facility.location}
                  </p>
                  <p className="mb-2 flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> {facility.phone}
                  </p>
                  <p className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-400" />{" "}
                    {facility.rating} ({facility.reviews} reviews)
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
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
