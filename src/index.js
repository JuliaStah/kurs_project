import './index.css';
import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import {NavigationProvider} from "./context/NavigationProvider";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <NavigationProvider>
        <App/>
    </NavigationProvider>
);