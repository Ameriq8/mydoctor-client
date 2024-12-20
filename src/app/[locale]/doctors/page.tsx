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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Cardiologist",
    city: "Baghdad",
    hospital: "Baghdad General Hospital",
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 2,
    name: "Dr. Ahmed Hassan",
    specialty: "Neurologist",
    city: "Baghdad",
    hospital: "Al-Kindy Teaching Hospital",
    rating: 4.7,
    reviews: 87,
  },
  {
    id: 3,
    name: "Dr. Sarah Al-Mahmoud",
    specialty: "Pediatrician",
    city: "Basra",
    hospital: "Basra Children's Hospital",
    rating: 4.9,
    reviews: 120,
  },
  {
    id: 4,
    name: "Dr. Mustafa Karim",
    specialty: "Orthopedic Surgeon",
    city: "Erbil",
    hospital: "Erbil Heart Center",
    rating: 4.6,
    reviews: 75,
  },
  {
    id: 5,
    name: "Dr. Fatima Al-Jabouri",
    specialty: "Dermatologist",
    city: "Mosul",
    hospital: "Mosul Rehabilitation Center",
    rating: 4.7,
    reviews: 88,
  },
  {
    id: 6,
    name: "Dr. Ali Rashid",
    specialty: "Ophthalmologist",
    city: "Najaf",
    hospital: "Najaf Medical City",
    rating: 4.8,
    reviews: 92,
  },
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()),
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
          Find a Doctor
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
              placeholder="Search doctors by name, specialty, city, or hospital..."
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
          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48`}
                        alt={`${doctor.name}'s avatar`}
                      />
                      <AvatarFallback>
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialty}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-2 flex items-center">
                    <MapPin className="mr-2 h-4 w-4" /> {doctor.city},{" "}
                    {doctor.hospital}
                  </p>
                  <p className="flex items-center">
                    <Star className="mr-2 h-4 w-4 text-yellow-400" />{" "}
                    {doctor.rating} ({doctor.reviews} reviews)
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Appointment</Button>
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
