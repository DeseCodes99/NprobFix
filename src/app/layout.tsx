// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header"; // Assuming Header is styled separately
import Footer from "./components/footer"; // Assuming Footer is styled separately

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nProbFix Construction - Your Trusted Building Partner", // More descriptive title
  description:
    "nProbFix Construction offers complete construction services in Sydney, specializing in renovations, residential, and commercial projects.", // Enhanced description for SEO
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/nProbFixmainlogoWhite.png" />
      </head>
      <body className={`${inter.className} antialiased text-gray-800`}>
        {" "}
        <div>

        <Header />
        </div>
        <div>

        {children}
        </div>
        <div className="bg-slate-800 w-full pt-8">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
