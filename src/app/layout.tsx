import "./globals.css";

import Link from "next/link";
import { asText } from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicPreview } from "@prismicio/next";

import { createClient, repositoryName } from "@/prismicio";
import Image from "next/image";

import HofLogotype from "@/assets/images/logotype-hof.svg";
import Header from "@/components/layout/header";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: asText(settings.data.site_title),
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-light tracking-wide">
        <Header />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}

async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="px-6 py-10 text-neutral-200">
      <Image src={HofLogotype} alt="Hofmeister" className="w-full" />
      <div className="mt-16 md:mt-[32rem] grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-5">
        <div className="col-span-2 md:col-start-2">
          <h4 className="font-normal mb-2">Hofmeister Workshop</h4>
          <p className="max-w-xl">
            Jl. Prawirotaman No.12, Brontokusuman, Mergangsan, Yogyakarta City,
            Special Region of Yogyakarta 55153
          </p>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-4">
          <h4 className="font-normal mb-2">Contact</h4>
          <p>+62 877-3042-3382</p>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-5">
          <h4 className="font-normal mb-2">Socials</h4>
          <ul>
            <li>
              <Link href={"https://www.instagram.com/__hofmeister/"}>
                Instagram
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/__hofmeister/"}>
                Tiktok
              </Link>
            </li>
            <li>
              <Link href={"https://www.instagram.com/__hofmeister/"}>
                Whatsapp
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 md:col-start-6">
          <h4 className="font-normal mb-2">Shop</h4>
          <ul>
            <li>
              <Link href={"https://www.instagram.com/__hofmeister/"}>
                Tokopedia
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1 w-full h-full max-w-5xl text-left text-xs flex-col items-end justify-end">
          2024 <PrismicText field={settings.data.site_title} /> &mdash; All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
