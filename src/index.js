import './index.css';
import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import {NavigationProvider} from "./context/NavigationProvider";
import {FavouriteProvider} from "./context/FavouriteContext";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <NavigationProvider>
        <FavouriteProvider>
            <App/>
        </FavouriteProvider>
    </NavigationProvider>
);
