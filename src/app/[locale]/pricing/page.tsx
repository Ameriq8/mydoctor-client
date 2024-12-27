'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Check, HelpCircle, Star } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 39,
    yearlyPrice: 390,
    description: 'Essential features for small practices',
    features: [
      'Standard profile',
      'Basic search listing',
      'Basic analytics (views, clicks)'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: 'Advanced features for growing clinics',
    features: [
      'Enhanced profile (photos and videos)',
      'Featured placement in search',
      'Advanced analytics dashboard'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 249,
    yearlyPrice: 2400,
    description: 'Comprehensive solution for large hospitals',
    features: [
      'AI-powered recommendations',
      'Real-time analytics dashboard',
      'Unlimited profile enhancements',
      'Priority support',
      'Free booking fees (unlimited appointments)'
    ]
  }
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        <motion.h1 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Perfect Plan
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Unlock the full potential of your healthcare facility with our tailored plans
        </motion.p>
        <motion.div
          className="flex justify-center items-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className={`mr-2 ${isYearly ? 'text-gray-500' : 'font-semibold'}`}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <span className={`ml-2 ${isYearly ? 'font-semibold' : 'text-gray-500'}`}>Yearly (Save up to 17%)</span>
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
                staggerChildren: 0.1
              }
            }
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Card className={`flex flex-col h-full ${index === 1 ? 'border-purple-500 border-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center justify-between">
                    {plan.name}
                    {index === 1 && <Star className="h-6 w-6 text-yellow-400" />}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-4xl font-bold mb-4">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="text-sm font-normal text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                        {feature.includes('AI-powered') && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <HelpCircle className="h-4 w-4 ml-2 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Our AI analyzes patient data to suggest the most relevant healthcare providers.</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    {index === 1 ? 'Start 14-Day Free Trial' : 'Choose Plan'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
          <p className="mb-4">We offer tailored plans for large healthcare networks and government institutions.</p>
          <Button variant="outline" size="lg">Contact Sales</Button>
        </motion.div>
        <motion.div
          className="mt-16 bg-gray-100 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept all major credit cards and bank transfers for monthly and annual plans.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">Yes, you can change your plan at any time. Prorated charges or credits will be applied to your account.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Is there a long-term contract?</h3>
              <p className="text-gray-600">No, our plans are billed monthly or annually with no long-term commitment required.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What kind of support do you offer?</h3>
              <p className="text-gray-600">We offer email support for all plans, with priority support for Enterprise plans.</p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

