"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ServicePageProps {
  title: string;
  description: string;
  content: string[];
  image: string;
  benefits?: string[];
}

export function ServicePage({ title, description, content, image, benefits }: ServicePageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          
          <div className="space-y-6">
            {content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {benefits && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
              <ul className="list-disc list-inside space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12">
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="/#contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}