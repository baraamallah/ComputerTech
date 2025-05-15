
"use client"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-muted/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal 
          direction="up" 
          delay={0} 
          once={false} 
          className="relative inline-block bg-[url('https://placehold.co/1200x400.png')] bg-cover bg-center p-6 rounded-xl shadow-2xl"
          data-ai-hint="futuristic abstract"
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40 rounded-xl z-0"></div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white min-h-[72px] md:min-h-[90px] relative z-10">
            <TypingAnimation text="GameSmart PC" speed={120} />
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200} once={false}>
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
            Power, Learning, and Safety in One. Experience the future of multi-purpose computing designed for gaming, education, and robust parental control.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={400} once={false}>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 transform">
              <Link href="#features">Explore Features</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 transform">
              <Link href="#try-it">Try It Out</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

