import { useContext } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectContext } from "../contexts/ProjectContext";


export default function ProjectList(){

    const projects = useContext(ProjectContext)
    return (
        <section className="project-list">
            {
                projects.map(project=> {
                        return <ProjectCard
                        key={project.id}
                        project={project}
                    />
                }   
            )
        }
        </section>
    )
}