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
import { MapPin, Phone, GraduationCap, Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This would typically come from an API or database
const doctorData = {
  id: 1,
  name: "Dr. Ahmed Hassan",
  image: "/placeholder.svg?height=200&width=200",
  specialty: "Cardiologist",
  hospital: "Baghdad General Hospital",
  address: "Bab Al-Muadham, Baghdad",
  phone: "+964 123 456 7890",
  education:
    "M.D. from University of Baghdad, Fellowship in Cardiology from Johns Hopkins University",
  experience: "15 years",
  rating: 4.8,
  reviews: 85,
  bio: "Dr. Ahmed Hassan is a highly skilled cardiologist with over 15 years of experience in treating cardiovascular diseases. He is known for his patient-centered approach and expertise in interventional cardiology.",
  services: [
    {
      id: 1,
      name: "Cardiac Consultation",
      description: "Comprehensive heart health evaluation",
    },
    {
      id: 2,
      name: "Echocardiography",
      description: "Non-invasive ultrasound of the heart",
    },
    {
      id: 3,
      name: "Angioplasty",
      description: "Minimally invasive procedure to open blocked arteries",
    },
  ],
  availability: [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 1:00 PM" },
  ],
};

export default function DoctorPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the doctor data based on the id
  const doctor = doctorData;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardContent className="flex flex-col items-center gap-8 pt-6 md:flex-row md:items-start">
              <Avatar className="h-48 w-48">
                <AvatarImage src={doctor.image} alt={doctor.name} />
                <AvatarFallback>
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="mb-2 text-3xl font-bold">{doctor.name}</h1>
                <p className="mb-4 text-xl text-muted-foreground">
                  {doctor.specialty}
                </p>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-purple-600" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-600" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-400" />
                    <span>
                      {doctor.rating} ({doctor.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>About Dr. {doctor.name.split(" ")[1]}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{doctor.bio}</p>
            </CardContent>
          </Card>

          <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="availability">Availability</TabsTrigger>
            </TabsList>
            <TabsContent value="services">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {doctor.services.map((service) => (
                  <Card
                    key={service.id}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle>{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardContent className="pt-6">
                  <p>{doctor.education}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="availability">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {doctor.availability.map((slot, index) => (
                  <Card
                    key={index}
                    className="transition-shadow duration-300 hover:shadow-lg"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Calendar className="mr-2 h-5 w-5 text-purple-600" />
                        {slot.day}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{slot.hours}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button size="lg">Book Appointment</Button>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
