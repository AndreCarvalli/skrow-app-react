import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import Dashboard from "../pages/Dashboard";
import MyProjects from "../pages/MyProjects";
import Profile from "../pages/Profile";
import LogIn from "../pages/LogIn";

export default function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Login" element={<LogIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}>
                {/* Dashboard Link */}
                <Route index element={<MyProjects />} />
                <Route path="myprojects" element= {<MyProjects/>}/>
                <Route path="profile" element= {<Profile/>}/>
            </Route>
        </Routes>
    )
}