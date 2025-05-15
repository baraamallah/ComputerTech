import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-muted/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          GameSmart PC
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Power, Learning, and Safety in One. Experience the future of multi-purpose computing designed for gaming, education, and robust parental control.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/30 transition-shadow">
            <Link href="#features">Explore Features</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-accent/20 transition-shadow">
            <Link href="#try-it">Try It Out</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
