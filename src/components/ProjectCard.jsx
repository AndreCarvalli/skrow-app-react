import Milestone from "./Milestone";

export default function ProjectCard({project}){
    return (
        <section className="card">
            <section className="card-header">
                <h3>Project: {project.title}</h3>
                <p>Client: {project.clientId}</p>
                <p>
                    Project Amount: {project.currency}
                    {" "}{project.totalAmount}
                </p>
                <p>Status: {project.status}</p>
            </section>

            <section className="card-milestones">
                {
                    project.milestones.map(milestone =>(
                        <Milestone
                            key={milestone.id}
                            milestone={milestone}
                            currency={project.currency}
                        />
                    ))
                }

            </section>  
        </section>
    )
}