
"use client"; // Added for ScrollReveal
import { ComponentCard } from "@/components/ComponentCard";
import { Cpu, MemoryStick, HardDrive, CircuitBoard, Laptop2, Cog } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

interface ComponentDetail {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

const components: ComponentDetail[] = [
  { 
    id: "cpu", 
    name: "CPU (Central Processing Unit)", 
    description: "The powerful Intel Core i9 processor, the brain of the PC, handles all complex calculations and tasks with lightning speed.", 
    icon: Cpu 
  },
  { 
    id: "ram", 
    name: "RAM (Random Access Memory)", 
    description: "32GB of high-speed DDR5 RAM ensures smooth multitasking and performance in demanding games and applications.", 
    icon: MemoryStick 
  },
  { 
    id: "storage", 
    name: "Storage (SSD)", 
    description: "A 2TB NVMe SSD provides ultra-fast boot times, quick application loading, and ample space for games and files.", 
    icon: HardDrive 
  },
  { 
    id: "motherboard", 
    name: "Motherboard", 
    description: "A feature-rich Z-series motherboard provides stable power delivery, extensive connectivity, and future upgrade paths.", 
    icon: CircuitBoard 
  },
  { 
    id: "gpu", 
    name: "GPU (Graphics Processing Unit)", 
    description: "NVIDIA GeForce RTX 4080 graphics card delivers breathtaking visuals and high frame rates in the latest games.", 
    icon: Cog
  },
  { 
    id: "io", 
    name: "I/O & Peripherals", 
    description: "Includes a mechanical keyboard, gaming mouse, high-refresh-rate monitor, and multiple USB/Thunderbolt ports.", 
    icon: Laptop2 
  },
];

export function ComponentsSection() {
  return (
    <section id="components" className="py-16 md:py-24 bg-muted/30 dark:bg-muted/10 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Inside GameSmart PC
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Explore the high-quality components that power your experience.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <ScrollReveal
              key={component.id}
              direction={index % 2 === 0 ? "left" : "right"} // Alternate direction
              delay={100 * (index % 3)} // Stagger delay for each row item
            >
              <ComponentCard
                icon={component.icon}
                name={component.name}
                description={component.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
