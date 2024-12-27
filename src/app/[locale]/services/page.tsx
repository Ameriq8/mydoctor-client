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
import { Pill, Search, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const treatments = [
  {
    id: 1,
    name: "Chemotherapy",
    type: "Cancer Treatment",
    duration: "3-6 months",
    cost: "High",
    description:
      "Drug treatment that uses powerful chemicals to kill fast-growing cells in your body",
  },
  {
    id: 2,
    name: "Physical Therapy",
    type: "Rehabilitation",
    duration: "4-8 weeks",
    cost: "Medium",
    description:
      "Helps you improve movement and manage pain after an injury or illness",
  },
  {
    id: 3,
    name: "Cognitive Behavioral Therapy",
    type: "Mental Health",
    duration: "12-20 weeks",
    cost: "Medium",
    description: "Helps you become aware of inaccurate or negative thinking",
  },
  {
    id: 4,
    name: "Laser Eye Surgery",
    type: "Ophthalmology",
    duration: "30 minutes",
    cost: "High",
    description:
      "Corrects vision problems and reduces dependence on glasses or contact lenses",
  },
  {
    id: 5,
    name: "Dental Implants",
    type: "Dentistry",
    duration: "3-6 months",
    cost: "High",
    description:
      "Replaces tooth roots with metal, screwlike posts and replaces damaged or missing teeth",
  },
  {
    id: 6,
    name: "Acupuncture",
    type: "Alternative Medicine",
    duration: "30-60 minutes per session",
    cost: "Low",
    description:
      "Involves the insertion of very thin needles through your skin at strategic points on your body",
  },
];

export default function TreatmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredAndSortedTreatments = treatments
    .filter(
      (treatment) =>
        (filterType === "all" || treatment.type === filterType) &&
        (treatment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          treatment.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())),
    )
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "cost") {
        const costOrder = { Low: 1, Medium: 2, High: 3 };
        return (
          costOrder[b.cost as keyof typeof costOrder] -
          costOrder[a.cost as keyof typeof costOrder]
        );
      }
      return 0;
    });

  const uniqueTypes = Array.from(new Set(treatments.map((t) => t.type)));

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
          Medical Services
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
              placeholder="Search treatments..."
              className="pr-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {uniqueTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="cost">Cost</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredAndSortedTreatments.map((treatment) => (
            <motion.div
              key={treatment.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="flex h-full flex-col transition-shadow duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Pill className="mr-2 h-5 w-5 text-purple-600" />
                    {treatment.name}
                  </CardTitle>
                  <CardDescription>{treatment.type}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{treatment.description}</p>
                  <p className="mb-2 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-gray-500" />
                    Duration: {treatment.duration}
                  </p>
                  <p className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-gray-500" />
                    Cost: {treatment.cost}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href={`/services/${treatment.id}`} className="w-full">
                    <Button className="w-full">Learn More</Button>
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
