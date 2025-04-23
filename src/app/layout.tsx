import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Samurai Shot | Energetické nápoje",
  description: "Energetické a slavnostní nápoje bez alkoholu. Nápoje Samurai přinášejí chuť výjimečnosti, energii a styl každé příležitosti.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
