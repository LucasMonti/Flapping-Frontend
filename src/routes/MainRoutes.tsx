import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Challenges from "../components/pages/Challenges/Challenges";

const MainRoutes = () => {
    return (
      <Routes>
           <Route path="/" element={<Challenges/>}/>
           <Route path="/*" element={<Navigate to="/proyects" />}/>
      </Routes>
    )
};

export default MainRoutes;
