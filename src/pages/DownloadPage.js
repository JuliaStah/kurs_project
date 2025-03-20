import React from 'react';
import { useDownloads } from '../context/DownloadContext';
import "../DownloadPage.css";

const DownloadPage = () => {
    const { downloads, removeAllDownloads } = useDownloads();

    const handleRemoveAll = () => {
        removeAllDownloads();
    }

    return (
        <div>
            <div>
                {downloads.length === 0 ? (
                    <div className="container flex justify-center">Загрузки отсутствуют</div>
                ) : (
                    downloads.map((url, index) => (
                        <div key={index} className="download-item">
                            <div>{url}</div>
                        </div>
                    ))
                )}
            </div>
            <div>
                {downloads.length > 0 && (
                    <a onClick={handleRemoveAll} className="delete-all-button">
                        Удалить историю загрузок
                    </a>
                )}
            </div>
        </div>
    );
}

export default DownloadPage;
