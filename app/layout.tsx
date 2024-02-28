import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import "./dist/app.css";
import "./dist/custom.css";
import "./dist/bootstrap-grid.css";
import { Providers } from "./providers";

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
      <Head>
        <meta
          property="og:image"
          content="https://assets.unileversolutions.com/v1/35431836.png"
        />
      </Head>

      <body className={"poppins-regular"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
