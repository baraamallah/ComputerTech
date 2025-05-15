
"use client"; 
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateVisionPoster } from '@/ai/flows/generate-vision-poster-flow';
import { Loader2, AlertTriangle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

export function AboutSection() {
  const [posterImageUrl, setPosterImageUrl] = useState<string>("https://placehold.co/800x600.png");
  const [isLoadingPoster, setIsLoadingPoster] = useState(true);
  const [posterError, setPosterError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPoster = async () => {
      setIsLoadingPoster(true);
      setPosterError(null);
      try {
        const result = await generateVisionPoster();
        setPosterImageUrl(result.posterDataUri);
      } catch (err) {
        console.error("Failed to generate vision poster:", err);
        setPosterError("Could not generate vision poster. Displaying default.");
        // Keep the initial placeholder if generation fails
        setPosterImageUrl("https://placehold.co/800x600.png"); 
        toast({
          variant: "destructive",
          title: "Poster Generation Failed",
          description: "Could not generate the vision poster. Displaying a default image.",
        });
      } finally {
        setIsLoadingPoster(false);
      }
    };
    fetchPoster();
  }, [toast]);

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
                {isLoadingPoster && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/80 z-10">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="mt-2 text-sm text-muted-foreground">Generating Vision Poster...</p>
                  </div>
                )}
                {!isLoadingPoster && posterError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-destructive/10 z-10 p-4">
                    <AlertTriangle className="h-10 w-10 text-destructive mb-2" />
                    <p className="text-xs text-destructive text-center">{posterError}</p>
                  </div>
                )}
                <Image 
                  src={posterImageUrl}
                  alt="GameSmart PC Vision Poster" 
                  width={800} 
                  height={600}
                  className="object-cover w-full h-64 md:h-full"
                  // Removed data-ai-hint as the image is now dynamic or a specific placeholder
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
