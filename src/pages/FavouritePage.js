import React, { useState } from 'react';
import FavouriteButton from '../components/FavouriteButton';

function FavouritePage() {
    const [favoriteItems, setFavoriteItems] = useState([]); // Состояние для хранения избранных элементов

    const handleToggleFavorite = (item) => {
        setFavoriteItems((prev) => {
            if (prev.includes(item)) {
                // Если элемент уже в избранном, удаляем его
                return prev.filter((i) => i !== item);
            } else {
                // Если элемента нет, добавляем его в избранное
                return [...prev, item];
            }
        });
    };

    return (
        <div>
            <h1>Мои избранные элементы</h1>
            <FavouriteButton
                item="Инфографика 1"
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favoriteItems.includes("Инфографика 1")}
            />
            <FavouriteButton
                item="Инфографика 2"
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favoriteItems.includes("Инфографика 2")}
            />
            <FavouriteButton
                item="Инфографика 3"
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favoriteItems.includes("Инфографика 3")}
            />
            <h2>Добавленные в избранное:</h2>
            <ul>
                {favoriteItems.length > 0 ? (
                    favoriteItems.map((item) => <li key={item}>{item}</li>)
                ) : (
                    <li>Нет избранных элементов</li>
                )}
            </ul>
        </div>
    );
}

export default FavouritePage;