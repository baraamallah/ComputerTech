
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, Smile, LampDesk, WifiOff, Users } from "lucide-react";

const safetyTips = [
  {
    id: "healthy-habits",
    icon: Smile,
    title: "Healthy Gaming Habits",
    content: [
      "Take regular breaks: Every 20-30 minutes, look away from the screen for 20 seconds. Every hour, get up and stretch or walk around for 5-10 minutes.",
      "Stay hydrated: Keep a water bottle nearby and sip regularly.",
      "Balance gaming with other activities: Ensure time for homework, physical activity, and social interaction offline.",
      "Know when to stop: Avoid gaming late at night as it can affect sleep quality.",
    ],
  },
  {
    id: "ergonomics",
    icon: LampDesk,
    title: "Ergonomic Setup",
    content: [
      "Proper posture: Sit up straight with your feet flat on the floor. Your screen should be at eye level.",
      "Keyboard and mouse position: Keep them close to your body to avoid overreaching. Wrists should be straight.",
      "Monitor distance: Position the monitor an arm's length away.",
      "Lighting: Ensure your room is well-lit to reduce eye strain. Avoid glare on the screen.",
    ],
  },
  {
    id: "online-safety",
    icon: ShieldCheck,
    title: "Online Safety & Privacy",
    content: [
      "Protect personal information: Never share your full name, address, phone number, school, or passwords online.",
      "Use strong, unique passwords: Combine letters, numbers, and symbols. Don't use the same password for multiple accounts.",
      "Be cautious with strangers: Don't accept friend requests or messages from people you don't know.",
      "Report cyberbullying: If you see or experience bullying, tell a trusted adult.",
    ],
  },
  {
    id: "parental-guidance",
    icon: Users,
    title: "Parental Guidance & Controls",
    content: [
      "Open communication: Parents and children should discuss online activities, rules, and concerns regularly.",
      "Utilize GameSmart PC controls: Explore and set up time limits, content filters, and activity monitoring features.",
      "Understand game ratings: Check ESRB or PEGI ratings to ensure games are age-appropriate.",
      "Co-play when possible: Playing games together can be a fun way to understand what your child is experiencing online.",
    ],
  },
  {
    id: "digital-detox",
    icon: WifiOff,
    title: "Managing Screen Time",
    content: [
      "Set clear limits: Establish daily or weekly screen time allowances for gaming and other digital activities.",
      "Encourage offline hobbies: Support participation in sports, arts, clubs, or outdoor activities.",
      "Tech-free zones/times: Designate certain times (e.g., during meals, before bed) or areas (e.g., bedrooms) as screen-free.",
      "Lead by example: Adults can model healthy screen time habits.",
    ],
  },
];

export function SafetyWellbeingSection() {
  return (
    <section id="safety" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Digital Wellbeing & Safety
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Tips for a healthy and secure digital experience with your GameSmart PC.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {safetyTips.map((tip, index) => (
              <ScrollReveal key={tip.id} direction="up" delay={100 * index} once={false}>
                 <AccordionItem value={tip.id} className="mb-4 border bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <AccordionTrigger className="p-6 text-left hover:no-underline">
                    <div className="flex items-center text-lg font-medium text-primary">
                      <tip.icon className="mr-3 h-6 w-6" />
                      {tip.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0 text-muted-foreground space-y-2">
                    {tip.content.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
