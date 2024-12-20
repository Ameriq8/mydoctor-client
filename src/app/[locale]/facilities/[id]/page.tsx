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
import { MapPin, Phone, Clock, Star, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This would typically come from an API or database
const facilityData = {
  id: 1,
  name: "Baghdad General Hospital",
  image: "/placeholder.svg?height=400&width=800",
  type: "Public Hospital",
  category: "Hospital (Public)",
  address: "Bab Al-Muadham, Baghdad",
  phone: "+964 123 456 7890",
  workingHours: "24/7",
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: "Ahmed K.",
      rating: 5,
      comment:
        "Excellent care and modern facilities. The staff was very professional.",
      date: "2023-05-15",
    },
    {
      id: 2,
      user: "Fatima S.",
      rating: 4,
      comment: "Good experience overall. Wait times could be improved.",
      date: "2023-04-22",
    },
    {
      id: 3,
      user: "Mohammed R.",
      rating: 5,
      comment: "Top-notch emergency care. They saved my life!",
      date: "2023-03-10",
    },
    {
      id: 4,
      user: "Zainab H.",
      rating: 4,
      comment: "Clean and well-organized. The doctors are knowledgeable.",
      date: "2023-02-28",
    },
  ],
  description:
    "Baghdad General Hospital is a leading public healthcare facility providing comprehensive medical services to the residents of Baghdad and surrounding areas.",
  departments: [
    { id: 1, name: "Emergency Department", description: "24/7 emergency care" },
    { id: 2, name: "Cardiology", description: "Heart and cardiovascular care" },
    { id: 3, name: "Pediatrics", description: "Specialized care for children" },
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
      specialty: "Emergency Medicine",
      rating: 4.7,
      reviews: 75,
    },
  ],
};

export default function FacilityPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the facility data based on the id
  const facility = facilityData;

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
              src={facility.image}
              alt={`${facility.name}`}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 flex items-end bg-black bg-opacity-50">
              <div className="p-6">
                <h1 className="mb-2 text-4xl font-bold text-white">
                  {facility.name}
                </h1>
                <p className="text-lg text-white">{facility.type}</p>
              </div>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{facility.address}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-purple-600" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{facility.phone}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-purple-600" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{facility.workingHours}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5 text-purple-600" />
                  Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  {facility.rating} ({facility.reviews.length} reviews)
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About {facility.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{facility.description}</p>
              <p className="mt-2">Category: {facility.category}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="departments" className="mb-8 w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="departments">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {facility.departments.map((department) => (
                  <Card
                    key={department.id}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle>{department.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{department.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="doctors">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {facility.doctors.map((doctor) => (
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
            <TabsContent value="reviews">
              <div className="space-y-6">
                {facility.reviews.map((review) => (
                  <Card
                    key={review.id}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="mr-3 h-10 w-10">
                            <AvatarImage
                              src={`/placeholder.svg?height=40&width=40`}
                              alt={review.user}
                            />
                            <AvatarFallback>
                              {review.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">
                              {review.user}
                            </CardTitle>
                            <CardDescription>{review.date}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="mr-1 h-5 w-5 text-yellow-400" />
                          <span className="font-bold">{review.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p>{review.comment}</p>
                    </CardContent>
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
