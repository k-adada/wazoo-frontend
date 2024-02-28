import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import "./dist/app.css";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
         <meta property="og:image" content="https://assets.unileversolutions.com/v1/35431836.png" />
      </Head>

      <body className={"poppins-regular"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
