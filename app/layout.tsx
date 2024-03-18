import type { Metadata } from "next";
import "./globals.css";
import "./dist/app.css";
import "./dist/custom.css";
import "./dist/bootstrap-grid.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/mainComponents/Navbar";

export const metadata: Metadata = {
  title: "Lux | Your single Destination",
  description:
    "Lux is a platform for Travel Agencies and Destination Management Companies to manage their business operations and provide a seamless experience to their customers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"poppins-regular"}>
        <Providers>
          <div className="">
            <Navbar />
            {children}
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}
