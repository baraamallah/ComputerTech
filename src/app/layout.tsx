import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google'; // Changed from GeistSans and GeistMono
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from "@/components/ui/toaster";

// Setup Inter as the sans-serif font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans', // Use standard variable name for sans-serif
});

// Setup Roboto Mono as the monospace font
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono', // Use standard variable name for monospace
});

export const metadata: Metadata = {
  title: 'GameSmart PC Showcase',
  description: 'Power, Learning, and Safety in One. A senior project by your team.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased"> {/* Use Tailwind's font-sans utility */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
