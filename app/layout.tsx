import type { Metadata } from "next";
import { Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import SectionCard from './components/SectionCard';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const primaryFont = Kanit({
   variable: "--font-primary",
   weight: ["300", "400", "500", "600", "700"],
   subsets: ["latin"],
});

const secondaryFont = Geist_Mono({
   variable: "--font-secondary",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}
         >
            <div className="min-h-screen flex items-center justify-center">
               <SectionCard>
                  <div className="relative rounded-lg w-[95vw] h-[95vh] shadow-xl">
                     <div className="h-full grid grid-cols-1 md:grid-cols-[500px,4fr] grid-rows-[70px,auto]">
                        <div className="text-background place-self-center w-full h-full flex justify-center items-center rounded-t-lg translate-y-[1px]">
                           <h1 className="text-6xl">
                              Adrien
                              <span className="pl-4 font-semibold">Thevon</span>
                           </h1>
                        </div>
                        <Navbar />
                        <div className="col-span-2 h-full bg-background rounded-b-lg rounded-tl-lg">
                           {children}
                        </div>
                     </div>
                     <Footer />
                  </div>
               </SectionCard>
            </div>
         </body>
      </html>
   );
}
