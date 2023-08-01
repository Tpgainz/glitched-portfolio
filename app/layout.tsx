import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tpgainz Glitched portfolio",
  description: "Discover my porfolio with cool glitched animations !",
};

const inter = Inter({ subsets: ["latin-ext"], weight: "300"});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
      <title>Tpgainz Glitched portfolio</title>
        <meta name="description" content="Discover my porfolio with cool glitched animations !" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name='author' content='Tpgainz' />
        
      </Head>
      <body className={inter.className}>
        <div className="flex h-16 w-screen justify-center items-center">
          <div className="flex flex-row gap-12">
            <Link
              href="/"
              className="text-white md:text-2xl text-lg font-thin no-underline"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="text-white md:text-2xl text-lg font-thin no-underline"
            >
              Projects
            </Link>
          </div>
        </div>
        <main className="flex h-[85vh] justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
