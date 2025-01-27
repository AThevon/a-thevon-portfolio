'use client';

import GlowBackground from "./GlowBackground";
import { ReactNode, useRef, useEffect } from "react";
import { gsap } from "gsap";

const SectionCard = ({ children }: Readonly<{ children: ReactNode }>) => {
   const sectionRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         if (!sectionRef.current) return;

         const rect = sectionRef.current.getBoundingClientRect();
         const x = e.clientX - rect.left;
         const y = e.clientY - rect.top;

         const rotateX = ((y / rect.height) - 0.5) * 2; // Ajuste l'intensité avec * 15
         const rotateY = ((x / rect.width) - 0.5) * -2;

         // Appliquer les transformations avec GSAP
         gsap.to(sectionRef.current, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 3000, // Ajoute de la profondeur
            ease: "power1.out",
            duration: 0.5, // Lissage des mouvements
         });
      };

      const handleMouseLeave = () => {
         // Réinitialiser la card lorsque la souris quitte
         gsap.to(sectionRef.current, {
            rotationX: 0,
            rotationY: 0,
            ease: "power1.out",
            duration: 0.5,
         });
      };

      const card = sectionRef.current;
      if (card) {
         card.addEventListener("mousemove", handleMouseMove);
         card.addEventListener("mouseleave", handleMouseLeave);
      }

      return () => {
         if (card) {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
         }
      };
   }, []);

   return (
      <div className="min-h-screen flex items-center justify-center">
         <section
            ref={sectionRef}
            className="rounded-xl w-[95vw] h-[95vh] shadow-xl"
         >
            <GlowBackground />
            {children}
         </section>
      </div>
   );
}

export default SectionCard;