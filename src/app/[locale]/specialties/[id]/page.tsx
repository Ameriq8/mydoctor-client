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
import { Stethoscope, Search, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// This would typically come from an API or database
const specialtyData = {
  id: 1,
  name: "Cardiology",
  description: "Deals with disorders of the heart and blood vessels",
  doctors: [
    {
      id: 1,
      name: "Dr. Ahmed Hassan",
      rating: 4.8,
      reviews: 85,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Dr. Fatima Ali",
      rating: 4.9,
      reviews: 110,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Dr. Mohammed Khalid",
      rating: 4.7,
      reviews: 75,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Dr. Zainab Omar",
      rating: 4.6,
      reviews: 92,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      name: "Dr. Yusuf Ibrahim",
      rating: 4.8,
      reviews: 88,
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
};

export default function SpecialtyPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the specialty data based on the id
  const specialty = specialtyData;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = specialty.doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-3xl font-bold">{specialty.name}</h1>
          <p className="mb-6 text-lg text-muted-foreground">
            {specialty.description}
          </p>

          <div className="mb-6">
            <div className="relative max-w-md">
              <Input
                type="search"
                placeholder="Search doctors..."
                className="pr-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{doctor.name}</CardTitle>
                        <CardDescription>{specialty.name}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
