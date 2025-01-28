"use client";

import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React from 'react';

type ButtonProps = {
   children: React.ReactNode;
   icon?: React.ComponentType<{ size?: number; className?: string }>; // Typage corrigé pour l'icône
   href?: Url;
   className?: string;
};

const Button = ({ children, href, icon: Icon, className }: ButtonProps) => {
   const btnClass = "bg-primary-600 font-semibold rounded-md px-6 py-3 rounded-lg flex items-center justify-center hover:bg-primary-700";

   if (href) {
      return (
         <Link href={href} className={`${btnClass} ${className}`}>
            {Icon && <Icon size={24} className="inline-block mr-2" />}
            {children}
         </Link>
      );
   }

   return (
      <button className={`${btnClass} ${className}`}>
         {Icon && <Icon size={24} className="inline-block mr-2" />}
         {children}
      </button>
   );
};

export default Button;