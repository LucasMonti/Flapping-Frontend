import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Example from "../components/example/Example";
import Example2 from "../components/example/Example2";

const MainRoutes = () => {
    return (
      <Routes>
           <Route path="/example" element={<Example/>}/>
           <Route path="/example2" element={<Example2/>}/>
          {/*<Route path="/logout" element={<Navigate replace to={"/login"}/>}/>*/}
           <Route path="/*" element={<Navigate to="example" />}/>
      </Routes>
    )
};

export default MainRoutes;
