import React from 'react';
import { useFavorites } from '../context/FavouriteContext';
import {supabase} from "../client/SupabaseClient";
import {useEffect, useState} from "react";

function FavouritePage() {
    const { favorites, toggleFavorite } = useFavorites();
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
            Войдите в аккаунт, чтобы добавлять инфографические материалы в избранное.
        </div>;
    }

    return (
        <div>
            <div>
                {favorites.length > 0 ? favorites.map((item, index) => (
                    <div key={index}>
                        <img src={item} alt={`Избранный элемент ${index + 1}`} />
                        <a className="container flex justify-end" onClick={() => toggleFavorite(item)}>
                            Удалить из избранного
                        </a>
                    </div>
                )) : (
                    <div className="container flex justify-center text-purple-500">
                        Нет избранной инфографики
                    </div>
                )}
            </div>
        </div>
    );
}

export default FavouritePage;
