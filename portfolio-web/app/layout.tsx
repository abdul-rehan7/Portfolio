import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehan - Website Developer",
  description: "Modern and Minimalist Developer  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/logo.png" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
