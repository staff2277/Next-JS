import "./globals.css";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserratAlternates.variable} ${albertSans.variable}`}
    >
      <body>
        <header className=" ">
          <nav className="uppercase max-sm:py-[1rem] flex justify-between border border-purple-700 items-center lg:px-[2rem] sm:px-[1rem] max-sm:px-[.3rem] ">
            <div>
              <img className="max-sm:w-[150px]" src="/logo-1.svg" alt="logo" />
            </div>
            <ul className="flex sm:gap-[40px] max-sm:gap-[10px] text-[.9rem]">
              <li>3d Models</li>
              <li>3d About</li>
            </ul>
          </nav>
        </header>
        <div className="lg:px-[3rem] sm:px-[1.5rem] max-sm:px-[1rem] ">
          {children}
        </div>
      </body>
    </html>
  );
}
