import React, { useState } from 'react';

function FavouriteButton({ item, onToggleFavorite, isFavorite }) {
    const handleToggleFavorite = () => {
        onToggleFavorite(item);
    };

    return (
        <button onClick={handleToggleFavorite}>
            {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
        </button>
    );
}

export default FavouriteButton;