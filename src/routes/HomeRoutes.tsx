import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Login from "../components/Users/Login/Login";
import App from "../App";
import Register from "../components/Users/Register/Register";
import {useEffect} from "react";

const HomeRoutes = () => {

    const navigate = useNavigate()

    const navHome = () => {
        return navigate('/homeState', {state: true})
    }

    const navLogin = () => {
        return navigate('/')
    }


    useEffect(() => {
            const token = localStorage.getItem('token')
            token ? navHome() : navLogin()
        }
        , [])

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home/*" element={<App/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/logout" element={<Navigate state to="/login"/>}/>
            <Route path="/homeState" element={<Navigate state to="/home"/>}/>
            <Route path="/*" element={<Navigate to="/login"/>}/>
        </Routes>
    );
};

export default HomeRoutes;
