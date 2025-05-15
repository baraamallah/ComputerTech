
"use client"; 
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutSection() {
  // Updated to point to a local image.
  // Place your image at public/images/gamesmart-vision-poster.png
  const posterImageUrl = "/images/gamesmart-vision-poster.png"; 

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              About GameSmart PC
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Learn more about our senior project and its mission.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={200}>
          <Card className="shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative">
                <Image 
                  src={posterImageUrl}
                  alt="GameSmart PC Vision Poster" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-64 md:h-full"
                  data-ai-hint="futuristic tech" // You can change this hint if your image content is different
                  priority={false} 
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-semibold text-primary">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4 text-foreground/90">
                  <p>
                    GameSmart PC is a senior project dedicated to creating a versatile computing solution that balances high-performance gaming, comprehensive educational resources, and robust parental controls. 
                    Our goal is to provide a machine that adapts to the diverse needs of modern families and students.
                  </p>
                  <p>
                    This website serves as a showcase for the GameSmart PC concept, highlighting its key features, components, and interactive capabilities. It's designed to be engaging and informative for a school exhibition setting.
                  </p>
                  <p className="font-medium text-muted-foreground">
                    Thank you for exploring our project!
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
