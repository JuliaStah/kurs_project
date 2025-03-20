import React, { createContext, useContext, useState } from 'react';

const DownloadContext = createContext();

export const useDownloads = () => {
    return useContext(DownloadContext);
};

export const DownloadProvider = ({ children }) => {
    const [downloads, setDownloads] = useState([]);

    const addDownload = (file) => {
        setDownloads((prevDownloads) => [...prevDownloads, file]);
    };

    const removeAllDownloads = () => {
        setDownloads([]);
    };

    return (
        <DownloadContext.Provider value={{ downloads, addDownload, removeAllDownloads }}>
            {children}
        </DownloadContext.Provider>
    );
};

export default DownloadContext;