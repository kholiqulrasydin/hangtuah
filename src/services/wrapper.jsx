import React from 'react';
import { BrowserRouter } from "react-router-dom";
import UrlRoutes from "./url-routes.jsx";

function Wrapper(){
    return (
        <BrowserRouter>
            <UrlRoutes />
        </BrowserRouter>
    );
}
export default Wrapper;

