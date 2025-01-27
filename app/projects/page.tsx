import { projects } from "../data/projects";

export default function Projets() {
   
   return (

      <div className="w-full h-full flex justify-center items-center p-10">
         <div className="grid grid-cols-4 gap-4 grid-row-[auto,1fr] w-full h-full">
            {projects.map((project, index) => (
               <div key={index} className="bg-red-500 rounded-xl shadow-xl p-8 h-full flex flex-col justify-between">
                  <h2 className="text-2xl font-semibold mb-4">{project.name}</h2>
                  <p className="text-lg mb-4">{project.description}</p>
                  <a href={project.path} target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-500 px-6 py-3 rounded-lg flex items-center justify-center">
                     Voir le projet
                  </a>
               </div>
            ))}
         </div>
      </div>

   );
}
