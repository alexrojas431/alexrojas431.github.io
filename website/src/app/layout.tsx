import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/scss/layout/root.scss";
//TODO: Add error boundary to handle custom errors made
//TODO: Look into adding CDN, Content Delivery Network to store images. or find a way to decrease image size for sake of 1GB limit on GitHub
//TODO: Optimize the site through composition like child props or comp props. Also React.memo if needed.
//TODO: Like the TODO above, make layout of projects use child props

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Rojas",
  description: "Generated by create next app",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer>Published with GitHubPages</footer>
      </body>
    </html>
  );
}
