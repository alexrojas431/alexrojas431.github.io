import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alexander Rojas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-indigo-800">{children}</body>
    </html>
  );
}
