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
        <header>
          <nav className="uppercase flex justify-between border items-center px-[2rem]">
            <div>
              <img src="/logo-1.svg" alt="logo" />
            </div>
            <ul className="flex gap-[40px] text-[.9rem]">
              <li>3d Models</li>
              <li>3d About</li>
            </ul>
          </nav>
        </header>
        <div className="px-[3rem]">{children}</div>
      </body>
    </html>
  );
}
