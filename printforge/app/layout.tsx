import "./globals.css";
import type { RootLayoutProps } from "./types";
import Navbar from "./components/Navbar";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";
import Link from "next/link";

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
        <div className="flex max-lg:flex-col lg:px-[3rem] sm:px-[1.5rem] max-sm:px-[1rem] my-[3rem]">
          <aside className="fle hidden items-center lg:h-[94vh] lg:fixed lg:w-[18%] border-2 border-red-500 bg-white">
            <ul className="w-full flex lg:flex-col ">
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  All
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  3D Printer
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Art
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Education
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Fashion
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Hobby & DIY
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Household
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Miniatures
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Tools
                </li>
              </Link>
              <Link href={"#"}>
                <li className="uppercase text-[.85rem] hover:border-l-2 border-[#F77429] hover:text-[#F77429] p-[10px]">
                  Toys & Games
                </li>
              </Link>
            </ul>
          </aside>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
