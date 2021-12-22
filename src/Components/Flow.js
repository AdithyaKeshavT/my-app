import React from "react";
import { Routes,Route } from "react-router-dom";
import Main from "./Main";
import Register from "./Register";
import Home from './Home'

function Flow() {
    return(
        <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path='/register' element={<Register />} />
            <Route path='/Home' element={<Home />} />
        </Routes>
    );
}

export default Flow;