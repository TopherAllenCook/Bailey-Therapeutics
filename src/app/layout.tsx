import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Bailey Therapeutics | Special Education Advocacy for Parents",
  description:
    "Bailey Therapeutics helps parents of special education students understand their rights, prepare for IEP meetings, and advocate effectively for their children.",
  openGraph: {
    title: "Bailey Therapeutics | Special Education Advocacy for Parents",
    description:
      "15 years as a school SLP and administrator taught me how the system works. Now I help parents navigate it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
