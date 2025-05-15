import Link from "next/link";
import { Download, Presentation } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/80">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} GameSmart PC Team. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Link href="/placeholder-flyer.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Download size={16} /> Flyer/QR
          </Link>
          <Link href="/placeholder-poster.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-1">
            <Presentation size={16} /> Digital Poster
          </Link>
        </div>
      </div>
    </footer>
  );
}
