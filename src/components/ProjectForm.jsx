import { useContext, useState } from "react"
import { ProjectContext } from "../contexts/ProjectContext"

export default function ProjectForm({setProjects}) {

    const projects = useContext(ProjectContext)
    const [formData, setFormData] = useState({
        title: "",
        clientId: "",
        currency: "",
        totalAmount: "",
        status: ""
    })

    function handleOnChange(event) {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setProjects(
            [
                ...projects, formData
            ]
        )
        
    }
    return (
        <div className="form-div">
            <h5>Add New Project</h5>
            <form className="form-element" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    name="title"
                    value={formData.title}
                    placeholder="Enter Title"
                    onChange={handleOnChange}
                />
                <input
                    className="form-input"
                    name="clientId"
                    value={formData.clientId}
                    placeholder="Enter Client Name"
                    onChange={handleOnChange}
                />
                <input
                    className="form-input"
                    name="currency"
                    value={formData.currency}
                    placeholder="Enter Currency"
                    onChange={handleOnChange}
                />
                <input
                    className="form-input"
                    name="totalAmount"
                    value={formData.totalAmount}
                    placeholder="Enter Budget"
                    onChange={handleOnChange}
                />
                <input
                    className="form-input"
                    name="status"
                    value={formData.status}
                    placeholder="Select status"
                    onChange={handleOnChange}
                />
                <button className="bg-primary" type="submit" style={{ border: "none" }}>Add Project</button>
            </form>
        </div>
    )
}