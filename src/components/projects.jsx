import { LuExternalLink } from "react-icons/lu"
import { PROJECTS } from "../constants"

export const Projects = ({language}) => {
    return (
        <div className="border-b border-neutral-900 pb-4 mb-20">
            <h1 className="my-20 text-center text-4xl">{language === 'es' ? "Proyectos" : "Projects"}</h1>
            <div className="flex flex-col lg:items-center">
                {PROJECTS.map((project) => (
                    <div className="flex flex-wrap mb-14 lg:justify-center lg:w-1/2" key={project.id}>
                        <img className=" rounded-md" src={project.image} alt={language === 'es' ? project.es.title : project.en.title} />
                        <div className="mt-6">
                            <a href={project.url} aria-label="Ir al repositiorio del proyecto" target="_blank">
                                <h3 className="text-3xl font-semibold flex items-center hover:text-blue-300">{project.es.title} <LuExternalLink className="ms-1 text-xl"/></h3> 
                            </a>
                            <p className="my-4">{language === 'es' ? project.es.description : project.en.description}</p>
                            <div className="flex flex-wrap">                              
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium mt-2 lg:mt-0">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}