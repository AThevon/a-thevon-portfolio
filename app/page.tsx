import Image from 'next/image';
import HomeButtons from './components/HomeButtons';

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
               <HomeButtons />
            </div>
         </div>
      </div>

   );
}
