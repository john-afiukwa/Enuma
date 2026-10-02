import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const description =
  "One year of tiny hands, big laughs and answered prayers. Join us to give thanks on Sunday, 4 October 2026.";

export const metadata: Metadata = {
  metadataBase: new URL("https://enuma-is-one.vercel.app"),
  title: "Enuma is one",
  description,
  openGraph: {
    title: "Enuma is one",
    description,
    url: "/",
    siteName: "Enuma is one",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enuma is one",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1415",
};

const themeScript = `var t="dark";try{t=localStorage.getItem("theme")||t}catch(e){}if(t!=="system")document.documentElement.dataset.theme=t==="light"?"light":"dark"`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrument.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
