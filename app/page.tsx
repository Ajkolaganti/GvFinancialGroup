"use client";

import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Target, Briefcase, Calculator, ScrollText, Building2, Stamp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Investment Planning",
      description: "Strategic investment solutions tailored to your financial goals",
      icon: Target,
      href: "/services/investment-planning"
    },
    {
      title: "Retirement Solutions",
      description: "Secure your future with comprehensive retirement planning",
      icon: Shield,
      href: "/services/retirement-solutions"
    },
    {
      title: "Insurance Services",
      description: "Protect what matters most with our insurance solutions",
      icon: Building2,
      href: "/services/insurance-services"
    },
    {
      title: "Wealth Management",
      description: "Comprehensive wealth management strategies for long-term growth",
      icon: Briefcase,
      href: "/services/wealth-management"
    },
    {
      title: "Tax Planning",
      description: "Optimize your tax strategy with expert guidance",
      icon: Calculator,
      href: "/services/tax-planning"
    },
    {
      title: "Estate Planning",
      description: "Preserve and protect your legacy for future generations",
      icon: ScrollText,
      href: "/services/estate-planning"
    },
    {
      title: "Notary Services",
      description: "Professional notary services for your important documents",
      icon: Stamp,
      href: "/services/notary-services"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80"
          alt="Financial Success"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            GV Financial Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Building Your Financial Future with Confidence
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="#contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive financial solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">
                Let's discuss how we can help you achieve your financial goals
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <span className="font-medium">Ganesh Valluri</span>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium">Phone:</span>
                      <a href="tel:917-294-6591" className="ml-2 text-blue-600 hover:text-blue-800">
                        917-294-6591
                      </a>
                    </p>
                    <p className="flex items-center">
                      <span className="font-medium">Email:</span>
                      <a href="mailto:kolagantiaj1@gmail.com" className="ml-2 text-blue-600 hover:text-blue-800">
                        gvfinwealthservices@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}