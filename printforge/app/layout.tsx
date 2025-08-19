import "./globals.css";
import type { RootLayoutProps } from "./types";
import Navbar from "./components/Navbar";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat-alt",
});

const albertSans = Albert_Sans({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${montserratAlternates.variable} ${albertSans.variable}`}
    >
      <body>
        <header className=" ">
          <Navbar />
        </header>
        <div className="lg:px-[3rem] sm:px-[1.5rem] max-sm:px-[1rem] ">
          {children}
        </div>
      </body>
    </html>
  );
}
