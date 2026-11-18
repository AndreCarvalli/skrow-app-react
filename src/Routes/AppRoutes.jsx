import { Route, Routes } from "react-router";
import ProjectsPage from "../pages/ProjectsPage";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import MyProjects from "../pages/MyProjects";
import Profile from "../pages/Profile";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
                {/* Dashboard Link */}
                <Route index element={<MyProjects />} />
                <Route path="myprojects" element= {<MyProjects/>}/>
                <Route path="profile" element= {<Profile/>}/>
            </Route>
        </Routes>
    )
}