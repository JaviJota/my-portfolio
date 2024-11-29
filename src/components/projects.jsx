import { LuExternalLink } from "react-icons/lu"
import { PROJECTS } from "../constants"

export const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 mb-20">
            <h1 className="my-20 text-center text-4xl">Proyectos</h1>
            <div className="flex flex-wrap lg:justify-center">
                {PROJECTS.map((project) => (
                    <div className="flex flex-wrap mb-5 lg:justify-center lg:w-1/2" key={project.id}>
                        <img className=" rounded-md" src={project.image} alt={project.es.title} />
                        <div className="mt-6">
                            <a href={project.url} target="_blank">
                                <h3 className="text-3xl font-semibold flex items-center">{project.es.title} <LuExternalLink className="ms-1 mt-2 text-xl"/></h3> 
                            </a>
                            <p className="my-4">{project.es.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}