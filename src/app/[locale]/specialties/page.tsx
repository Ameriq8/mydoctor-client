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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stethoscope, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const specialties = [
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
    description:
      "Concentrates on injuries and diseases of the musculoskeletal system",
  },
  {
    id: 5,
    name: "Dermatology",
    doctors: 10,
    patients: 800,
    description:
      "Specializes in conditions involving the skin, hair, and nails",
  },
  {
    id: 6,
    name: "Ophthalmology",
    doctors: 12,
    patients: 900,
    description: "Deals with the anatomy, physiology and diseases of the eye",
  },
];

export default function SpecialtiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSortedSpecialties = specialties
    .filter(
      (specialty) =>
        specialty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        specialty.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "doctors") return b.doctors - a.doctors;
      if (sortBy === "patients") return b.patients - a.patients;
      return 0;
    });

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
          Medical Specialties
        </motion.h1>
        <motion.div
          className="mb-6 flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative flex-grow">
            <Input
              type="search"
              placeholder="Search specialties..."
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="doctors">Number of Doctors</SelectItem>
              <SelectItem value="patients">Number of Patients</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredAndSortedSpecialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-purple-600" />
                    {specialty.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="mb-4">
                    {specialty.description}
                  </CardDescription>
                  <p className="mb-2 flex items-center">
                    <Users className="mr-2 h-4 w-4 text-gray-500" />
                    {specialty.doctors} Doctors
                  </p>
                  <p className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-gray-500" />
                    {specialty.patients} Patients
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/specialties/${specialty.id}`}
                    className="w-full"
                  >
                    <Button className="w-full">View Doctors</Button>
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
