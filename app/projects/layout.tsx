import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="flex flex-col items-start mb-auto w-full">
            {children}
          </div>

  );
}
