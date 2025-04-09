import React from 'react';
import { useDownloads } from '../context/DownloadContext';
import "../DownloadPage.css";
import {supabase} from "../client/SupabaseClient";
import {useEffect, useState} from "react";

const DownloadPage = () => {
    const { downloads, removeAllDownloads } = useDownloads();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Ошибка получения пользователя:', error);
            } else {
                setUser(user);
            }
            setLoading(false);
        };

        fetchUser();
    },[]);

    if (loading) {
        return <div className='text-purple-500'>Загрузка...</div>;
    }

    if (!user) {
        return <div className='container flex justify-center text-purple-500'>
            Войдите в аккаунт, чтобы скачивать инфографические материалы.
        </div>;
    }

    const handleRemoveAll = () => {
        removeAllDownloads();
    }

    return (
        <div>
            <div>
                {downloads.length === 0 ? (
                    <div className="container flex justify-center text-purple-500">Загрузки отсутствуют</div>
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
