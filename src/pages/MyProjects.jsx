import { useEffect, useState } from "react"
import ProjectList from "../components/ProjectList";
import { ProjectContext } from "../contexts/ProjectContext";

export default function MyProjects(){

    const [projects, setProjects] = useState([])
    const API = `http://localhost:3000/projects`;

    useEffect(()=>{
        fetch(API)
        .then(res =>res.json())
        .then(data =>{
            setProjects(data)
        })
    },[])

    return(
        <ProjectContext.Provider value={projects}>
            
           <div className="title-myproject">
                <div>
                    <h1>My projects</h1>
                    <p>Showcasing projects you are part of</p>
                    <p style={{fontStyle:"italic"}}>{projects.length} projects currently active</p>
                </div>
                <button style={{height:"40px"}}>
                    Add projects
                </button>
           </div>

            
           < ProjectList
            // projects={projects}
           />           
        </ProjectContext.Provider>
    )
}