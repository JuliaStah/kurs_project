import React from 'react';
import { useDownloads } from '../context/DownloadContext';

const DownloadButton = ({ url }) => {
    const { addDownload } = useDownloads();

    const handleDownload = () => {
        addDownload(url);
    };

    return (
        <a href={url} onClick={handleDownload} download>
            Скачать
        </a>
    );
};

export default DownloadButton;
