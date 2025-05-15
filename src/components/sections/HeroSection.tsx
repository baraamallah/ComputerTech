
"use client"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TypingAnimation } from "@/components/TypingAnimation";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[url('https://placehold.co/1920x1080.png')] bg-cover bg-center"
      data-ai-hint="futuristic technology landscape"
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal 
          direction="up" 
          delay={0} 
          once={false}
          // Removed specific background from here, it's now on the parent section
          className="relative inline-block" 
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white min-h-[72px] md:min-h-[90px]">
            <TypingAnimation text="GameSmart PC" speed={120} />
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200} once={false}>
          <p className="mt-8 max-w-3xl mx-auto text-lg sm:text-xl text-neutral-200"> {/* Changed text color for contrast */}
            Power, Learning, and Safety in One. Experience the future of multi-purpose computing designed for gaming, education, and robust parental control.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={400} once={false}>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 transform">
              <Link href="#features">Explore Features</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105 transform text-white border-neutral-300 hover:bg-white/10 hover:text-white">
              {/* Adjusted outline button for better visibility on dark image */}
              <Link href="#try-it">Try It Out</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
