import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
   const networks = [
      { name: 'Github', url: 'https://www.github.com/AThevon', icon: Github },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/adrien-thevon-74b134100/', icon: Linkedin },
   ];
   return (
      <footer className="absolute bottom-0 right-0 p-6">
         <ul className="flex justify-center space-x-4">
            {networks.map((network, index) => (
               <li key={index} className="hover:text-primary-500 transition-all">
                  <Link href={network.url} target="_blank" rel="noreferrer">
                     <network.icon size={28} />
                  </Link>
               </li>
            ))}
         </ul>
      </footer>
   );
}

export default Footer;