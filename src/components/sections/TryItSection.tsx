
"use client"; // Added for ScrollReveal
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LaptopModelViewer from "@/components/LaptopModelViewer";
import { BinaryConverter } from "@/components/BinaryConverter";
import { PackageOpen, Terminal } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function TryItSection() {
  return (
    <section id="try-it" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0} once={false}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Experience GameSmart PC
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Interact with our tools and get a feel for what GameSmart offers.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200} once={false}>
          <Tabs defaultValue="model-viewer" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-8 max-w-lg mx-auto">
              <TabsTrigger value="model-viewer" className="text-sm sm:text-base py-2.5">
                <PackageOpen className="mr-2 h-5 w-5" /> 3D Model
              </TabsTrigger>
              <TabsTrigger value="binary-converter" className="text-sm sm:text-base py-2.5">
                <Terminal className="mr-2 h-5 w-5" /> Binary Tool
              </TabsTrigger>
            </TabsList>

            <TabsContent value="model-viewer">
              <div className="p-2 md:p-6 bg-card rounded-lg shadow-xl">
                <h3 className="text-xl font-semibold text-center mb-4 text-foreground">GameSmart PC - 3D Preview</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Explore a model of the GameSmart PC. Use your mouse to rotate and zoom.
                  (Note: This is a placeholder model. Ensure `laptop.glb` is in `public/models/`)
                </p>
                <LaptopModelViewer />
              </div>
            </TabsContent>
            <TabsContent value="binary-converter">
              <BinaryConverter />
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  );
}
