import React from 'react';
import Router from './Router'
import { BrowserRouter } from "react-router-dom";
import './styles/style.scss'


function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
