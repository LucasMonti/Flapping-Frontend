import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Example from "../components/example/example";
import Example2 from "../components/example/example2";

const MainRoutes = () => {
    return (
      <Routes>
           <Route path="/example" element={<Example/>}/>
           <Route path="/example2" element={<Example2/>}/>
           <Route path="/*" element={<Navigate to="/example" />}/>
      </Routes>
    )
};

export default MainRoutes;
