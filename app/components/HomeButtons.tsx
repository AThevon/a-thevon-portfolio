"use client";


import { Eye, File, Mail } from 'lucide-react';
import Button from './Button';

const HomeButtons = () => {
   return (
      <>
         <Button href="/resume.pdf" icon={File} className='!bg-neutral-200 hover:!bg-neutral-100 text-background'>
            Go to my resume
         </Button>
         <Button href="/contact" icon={Mail} className=''>
            Contact me
         </Button>
         <Button href="/projects" icon={Eye} className='col-span-2 !bg-neutral-700 hover:!bg-neutral-600'>
            See my projects
         </Button>
      </>
   )
};

export default HomeButtons;