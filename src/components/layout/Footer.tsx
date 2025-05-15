
import Link from "next/link";
import { Download, Presentation, Users } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p>&copy; {currentYear} GameSmart PC Team. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-1 md:mt-0">
              <Users size={14} className="inline-block" /> Created by Baraa and Mohammad Hachicho.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="/GameSmart_PC_Flyer.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Download size={16} /> Download Flyer
          </Link>
          <Link href="/GameSmart_PC_Digital_Poster.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Presentation size={16} /> Download Digital Poster
          </Link>
        </div>
      </div>
    </footer>
  );
}
