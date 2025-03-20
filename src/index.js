import './index.css';
import React from "react";
import ReactDom from 'react-dom/client';
import App from './App';
import {NavigationProvider} from "./context/NavigationProvider";
import {FavouriteProvider} from "./context/FavouriteContext";
import {DownloadProvider} from "./context/DownloadContext";

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <NavigationProvider>
        <FavouriteProvider>
            <DownloadProvider>
                <App/>
            </DownloadProvider>
        </FavouriteProvider>
    </NavigationProvider>
);
