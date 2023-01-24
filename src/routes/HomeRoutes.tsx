import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import App from "../App";
import {useEffect} from "react";
import AuthPage from "../components/auth/AuthPage/AuthPage";

const HomeRoutes = () => {

    const navigate = useNavigate()

    const navHome = () => {
        return navigate('/home-state', {state: true})
    }

    const navAuthPage = () => {
        return navigate('/')
    }


    useEffect(() => {
            const token = localStorage.getItem('token')
            token ? navHome() : navAuthPage()
        }
        , [])

    return (
        <Routes>
            <Route path="/auth-page" element={<AuthPage/>}/>
            <Route path="/home/*" element={<App/>}/>
            <Route path="/logout" element={<Navigate state to="/auth-page"/>}/>
            <Route path="/home-state" element={<Navigate state to="/home"/>}/>
            <Route path="/*" element={<Navigate to="/auth-page"/>}/>
        </Routes>
    );
};

export default HomeRoutes;
