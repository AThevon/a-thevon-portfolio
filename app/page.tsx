import { Eye, File, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
   return (

      <div className="w-full h-full flex justify-center items-center gap-8">
         <div className="overflow-hidden rounded-full shadow-xl">
            <Image src="/images/profilepic.jpg" alt="Adrien Thevon" width={300} height={300} className='scale-125' />
         </div>
         <div className="">
            <h2 className="text-4xl font-semibold mb-4">
               Hi there! 👋
            </h2>
            <p className="text-lg mb-4">
               I&apos;m Adrien, a software engineer based in Toulouse, France.
            </p>
            <div className="grid grid-cols-2 gap-2">
               <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className='bg-neutral-200 hover:bg-neutral-100 text-background px-6 py-3 rounded-lg flex items-center justify-center'
               >
                  <File size={24} className='inline-block mr-2' />
                  See my resume
               </Link>
               <Link href="/contact" className='bg-primary-600 hover:bg-primary-500 px-6 py-3 rounded-lg flex items-center justify-center'>
                  <Mail size={24} className='inline-block mr-2' />
                  Contact me
               </Link>
               <Link href="/projects" className='col-span-2 bg-neutral-700 hover:bg-neutral-600 px-6 py-3 rounded-lg flex items-center justify-center'>
                  <Eye size={24} className='inline-block mr-2' />
                  See my projects
               </Link>
            </div>
         </div>
      </div>

   );
}
