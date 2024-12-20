"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
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
          About MyDoctor.IQ
        </motion.h1>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mb-4 text-lg">
            MyDoctor.IQ is Iraq's leading healthcare platform, connecting
            patients with quality healthcare services across the country. Our
            mission is to make healthcare accessible, transparent, and efficient
            for all Iraqis.
          </p>
          <p className="mb-4 text-lg">
            Founded in 2023, we've quickly grown to become the most trusted
            source for finding and booking healthcare services in Iraq. We're
            committed to improving the healthcare experience for both patients
            and providers.
          </p>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-4 text-2xl font-bold">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Patient-Centric Care",
                icon: Heart,
                description:
                  "We put patients first in everything we do, ensuring their needs and experiences are at the heart of our service.",
              },
              {
                title: "Community Impact",
                icon: Users,
                description:
                  "We're committed to making a positive impact on the health of Iraqi communities through our platform and initiatives.",
              },
              {
                title: "Accessibility",
                icon: Globe,
                description:
                  "We strive to make quality healthcare accessible to all Iraqis, regardless of location or background.",
              },
              {
                title: "Innovation",
                icon: Clock,
                description:
                  "We continuously innovate to improve healthcare delivery and patient experiences in Iraq.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <value.icon className="mr-2 h-6 w-6 text-purple-600" />
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="mb-4 text-2xl font-bold">
            Join Us in Transforming Iraqi Healthcare
          </h2>
          <p className="mb-4 text-lg">
            We're always looking for passionate individuals and organizations to
            join us in our mission to improve healthcare in Iraq. Whether you're
            a healthcare provider, a tech enthusiast, or someone who shares our
            vision, we'd love to hear from you.
          </p>
          <Button size="lg">Contact Us</Button>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
