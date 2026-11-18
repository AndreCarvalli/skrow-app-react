import ProjectCard from "./ProjectCard";


export default function ProjectList({projects}){

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