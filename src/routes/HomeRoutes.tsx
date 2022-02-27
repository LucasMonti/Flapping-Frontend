import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";

const HomeRoutes = () => {
    return(
        <Routes>
            <Route path="/*" element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/*" element={<Navigate to="/*"/>}/>
        </Routes>
    );
};

export default HomeRoutes;
