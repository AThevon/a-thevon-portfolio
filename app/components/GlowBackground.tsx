import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GlowBackground = () => {
   const sectionRef = useRef(null);

   useEffect(() => {
      if (typeof window !== 'undefined') {
         gsap.to(sectionRef.current, {
            boxShadow: '0 0 10px 5px rgba(255, 0, 255, 0.5), 0 0 20px 10px rgba(0, 255, 255, 0.3)',
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power1.inOut',
         });
      }
   }, []);

   return (
      <div
         ref={sectionRef}
         className="absolute inset-0 z-[-1] bg-gradient-to-br from-primary-500 via-primary-300 to-primary-800 blur-lg rounded-xl"
      />
   );
};

export default GlowBackground;
