"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { Cpu, FolderDot, Home, UserPen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
   const pathname = usePathname();

   const navlinks = useMemo(() => [
      { title: "Home", path: "/", icon: Home },
      { title: "Projects", path: "/projects", icon: FolderDot },
      { title: "Languages", path: "/languages", icon: Cpu },
      { title: "Contact", path: "/contact", icon: UserPen },
   ], []);

   const navRefs = useRef<Array<HTMLLIElement | null>>([]);

   useEffect(() => {
      // Reset animation for all links
      navRefs.current.forEach((ref) => {
         if (ref) gsap.to(ref, { y: -20, duration: 0.2 });
      });

      // Animate the active link
      const activeIndex = navlinks.findIndex((link) => pathname === link.path);
      if (navRefs.current[activeIndex]) {
         gsap.to(navRefs.current[activeIndex], {
            y: -10,
            duration: 0.2,
            ease: "linear",
         });
      }
   }, [pathname, navlinks]);

   return (
      <nav className="rounded-t-lg bg-background translate-y-1 overflow-hidden">
         <ul className="w-full h-full flex justify-between px-8 items-center space-x-4">
            {navlinks.map((link, index) => (
               <li
                  key={index}
                  ref={(el) => {
                     navRefs.current[index] = el;
                  }}
                  className={`flex-1 text-lg font-semibold h-[125%] rounded-b-md flex hover:bg-primary-600 justify-center items-center ${ pathname === link.path ? "bg-primary-600" : "bg-transparent" }`}
               >
                  <Link
                     href={link.path}
                     className="pt-6 z-10 h-full w-full flex justify-center items-center"
                  >
                     <link.icon size={28} />
                     <span className="pl-3">{link.title}</span>
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default Navbar;