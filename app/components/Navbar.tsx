"use client";

import { Cpu, FolderDot, Home, UserPen } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
   const pathname = usePathname();
   const isActive = (path: string) => pathname === path;
   const navlinks = [
      {
         title: 'Home',
         path: '/',
         icon: Home
      },
      {
         title: 'Projects',
         path: '/projects',
         icon: FolderDot
      },
      {
         title: 'Languages',
         path: '/languages',
         icon: Cpu
      },
      {
         title: 'Contact',
         path: '/contact',
         icon: UserPen
      }
   ]
   return (
      <nav className="rounded-t-lg bg-background translate-y-1 overflow-hidden">
         <ul className="w-full h-full flex justify-between px-8 items-center space-x-4">
            {navlinks.map((link, index) => (
               <li
                  key={index}
                  className={`flex-1 text-lg font-semibold h-[125%] -translate-y-4 rounded-b-md flex hover:bg-primary-600 justify-center items-center transition-all ${isActive(link.path) ? '!bg-primary-500 hover:!bg-primary-500 -translate-y-2' : ''}`}
               >
                  <Link href={link.path} className='pt-6 z-10 h-full w-full flex justify-center items-center'>
                     <link.icon size={28} />
                     <span className='pl-3'>{link.title}</span>
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
}

export default Navbar;