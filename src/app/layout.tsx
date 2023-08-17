"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import { AuthContextProvider } from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Book Librabry",
  description:
    "A web app that allow users to save and modify information about books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Providers>{children}</Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
