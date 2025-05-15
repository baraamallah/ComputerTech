
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Cpu, MemoryStick, HardDriveIcon, Zap, Award, School, DollarSign, ShoppingCart, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface SpecDetail {
  icon: LucideIcon;
  text: string;
}

interface Configuration {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  priceRange: string;
  specs: SpecDetail[];
  ctaLink?: string;
  themeColor?: string; // Optional: e.g., 'text-cyan-400'
}

const configurations: Configuration[] = [
  {
    id: "scholar-gamer",
    name: "The Scholar Gamer",
    icon: School,
    description: "Perfect for students who need a reliable PC for studies and immersive casual gaming. Balances performance and affordability.",
    priceRange: "$900 - $1200",
    specs: [
      { icon: Cpu, text: "Modern Multi-Core CPU" },
      { icon: Zap, text: "Entry-Level Dedicated GPU" }, // Changed from generic 'GPU'
      { icon: MemoryStick, text: "16GB DDR4 RAM" },
      { icon: HardDriveIcon, text: "512GB NVMe SSD" },
    ],
    ctaLink: "#contact", // Example, replace with actual link or remove
    themeColor: "text-accent", // Use accent for this tier
  },
  {
    id: "performance-pro",
    name: "The Performance Pro",
    icon: Zap, // Changed from `Rocket` as it's not in lucide
    description: "For serious gamers and creators demanding smooth high-fidelity performance and stunning visuals in modern titles.",
    priceRange: "$1500 - $2000",
    specs: [
      { icon: Cpu, text: "High-Performance CPU (e.g., Core i7/Ryzen 7)" },
      { icon: Zap, text: "Mid-to-High Tier GPU (e.g., RTX 4070)" }, // Changed from generic 'GPU'
      { icon: MemoryStick, text: "32GB DDR5 RAM" },
      { icon: HardDriveIcon, text: "1TB Gen4 NVMe SSD" },
    ],
    ctaLink: "#contact",
    themeColor: "text-primary", // Use primary for this tier
  },
  {
    id: "ultimate-rig",
    name: "The Ultimate Rig",
    icon: Award, // Changed from `Crown`
    description: "Uncompromising power for elite gaming at max settings, 4K, streaming, and professional content creation without limits.",
    priceRange: "$2500+",
    specs: [
      { icon: Cpu, text: "Top-Tier CPU (e.g., Core i9/Ryzen 9)" },
      { icon: Zap, text: "Flagship GPU (e.g., RTX 4080/4090)" }, // Changed from generic 'GPU'
      { icon: MemoryStick, text: "32GB/64GB DDR5 High-Speed RAM" },
      { icon: HardDriveIcon, text: "2TB+ Gen5 NVMe SSD" },
    ],
    ctaLink: "#contact",
    themeColor: "text-destructive", // Example, could be another vibrant color
  },
];

export function ConfigurationsSection() {
  return (
    <section id="configurations" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0} once={false}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              GameSmart PC Configurations
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find the perfect build designed for your needs and budget.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {configurations.map((config, index) => (
            <ScrollReveal
              key={config.id}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={150 * (index % 3)}
              once={false}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:border-primary/50 dark:hover:border-primary/70 transform hover:scale-105 hover:-translate-y-1">
                <CardHeader className="items-center text-center pb-4">
                  <div className={`p-4 rounded-full bg-primary/10 dark:bg-primary/20 mb-4 border-2 border-primary/30 dark:border-primary/50 group-hover:border-primary transition-colors`}>
                    <config.icon size={40} className={`${config.themeColor || 'text-primary'} transition-colors group-hover:text-primary dark:group-hover:text-primary-foreground/90`} strokeWidth={1.5} />
                  </div>
                  <CardTitle className={`text-2xl font-bold ${config.themeColor || 'text-foreground'} group-hover:text-primary transition-colors`}>{config.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{config.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 pt-2">
                  <div className="text-center mb-4">
                    <p className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">{config.priceRange}</p>
                    <p className="text-xs text-muted-foreground">Estimated Price Point</p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {config.specs.map((spec) => (
                      <li key={spec.text} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 mt-px text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{spec.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                {config.ctaLink && (
                  <CardFooter className="pt-6 justify-center">
                    <Button asChild className="w-full sm:w-auto shadow-lg group-hover:shadow-primary/40 transition-all duration-300" variant="default">
                      <Link href={config.ctaLink}>
                        <ShoppingCart className="mr-2" /> Learn More
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
