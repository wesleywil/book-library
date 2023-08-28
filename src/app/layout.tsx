"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Providers } from "./provider";
import { AuthContextProvider } from "@/context/authContext";
import Menu from "@/components/menu/menu.component";

const kanit = Kanit({ subsets: ["latin"], weight: "400" });

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
      <body className={`${kanit.className} overflow-hidden`}>
        <AuthContextProvider>
          <Menu />
          <Providers>{children}</Providers>
        </AuthContextProvider>
      </body>
    </html>
  );
}
