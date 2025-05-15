import type { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ComponentCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

export function ComponentCard({ icon: Icon, name, description }: ComponentCardProps) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="text-center shadow-md hover:shadow-lg transition-shadow cursor-default h-full flex flex-col">
            <CardHeader className="items-center pb-2">
              <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                 <Icon size={36} strokeWidth={1.5} />
              </div>
              <CardTitle className="text-lg font-medium">{name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs text-center">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
