import { useEffect, useState } from "react"
import ProjectList from "../components/ProjectList";

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
        <>
           < ProjectList
            projects={projects}
           />           
        </>
    )
}