// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/style.css";
import "@/components/style-switcher.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Head from "next/head";
import { AsideProvider } from "@/context/AsideContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harshil Karia",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AsideProvider>
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Portfolio</title>
          {/*======= CSS Files =======*/}
          <link rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
          {/*===== Style Switcher =====*/}
          <link id="color-1" rel="stylesheet" href="/css/skins/color-1.css" className="alternate-style" title="color-1" />
          <link id="color-2" rel="stylesheet" href="/css/skins/color-2.css" className="alternate-style" title="color-2" />
          <link id="color-3" rel="stylesheet" href="/css/skins/color-3.css" className="alternate-style" title="color-3" />
          <link id="color-4" rel="stylesheet" href="/css/skins/color-4.css" className="alternate-style" title="color-4" />
          <link id="color-5" rel="stylesheet" href="/css/skins/color-5.css" className="alternate-style" title="color-5" />
          <link rel="stylesheet" href="/css/style-switcher.css" />
        </Head>
        <body className={`${inter.className} dark`} style={{ backgroundColor: "#222222" }}>
          {children}
        </body>
      </html>
    </AsideProvider>
  );
}
