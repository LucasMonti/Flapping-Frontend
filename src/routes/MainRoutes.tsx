import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Proyects from "../components/pages/Proyects/Proyects";

const MainRoutes = () => {
    return (
      <Routes>
           <Route path="/" element={<Proyects/>}/>
           <Route path="/*" element={<Navigate to="/proyects" />}/>
      </Routes>
    )
};

export default MainRoutes;
