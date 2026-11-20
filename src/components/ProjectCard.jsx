import Milestone from "./Milestone";

export default function ProjectCard({project}){
    return (
        <section className="card">
            <section className="card-header">
                <h3>{project.title}</h3>
                <p>Client: {project.clientId}</p>
                <p>
                    Budget: {project.currency}
                    {" "}{project.totalAmount}
                </p>
                <p style={{color:"green"}}>Status: {project.status}</p>
            </section>

            <section className ="card-milestones">
                {
                    project.milestones.map(milestone => (
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