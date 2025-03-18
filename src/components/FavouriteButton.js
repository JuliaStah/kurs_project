import React from 'react';
import { useFavorites } from '../context/FavouriteContext';

function FavouriteButton({ item }) {
    const { favorites, toggleFavorite } = useFavorites();
    const isFavorite = favorites.includes(item);

    const handleToggleFavorite = () => {
        toggleFavorite(item);
    };

    return (
        <button onClick={handleToggleFavorite}>
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
    );
}

export default FavouriteButton;
