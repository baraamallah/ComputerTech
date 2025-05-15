
"use client"; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, BookOpen, ShieldCheck, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: "High-Performance Gaming",
    description: "Packed with powerful components for an immersive gaming experience. Enjoy smooth gameplay and stunning visuals.",
  },
  {
    icon: BookOpen,
    title: "Educational Powerhouse",
    description: "Access a suite of educational tools and resources, perfect for learning and skill development.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Parental Controls",
    description: "Ensure a safe online environment with our intuitive and customizable parental control dashboard.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Components",
    description: "Built with the latest technology to deliver speed, reliability, and efficiency for all your tasks.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0} once={false}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Why GameSmart PC?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover the unique advantages of our all-in-one computing solution.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={50 * index} // Reduced delay
              once={false}
            >
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-105 transform hover:-translate-y-1 h-full">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-primary text-primary-foreground mb-4">
                    <feature.icon size={32} strokeWidth={1.5}/>
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

    