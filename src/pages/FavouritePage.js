import React from 'react';
import { useFavorites } from '../context/FavouriteContext';

function FavouritePage() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div>
            <ul>
                {favorites.length > 0 ? favorites.map((item, index) => (
                    <li key={index}>
                        <img src={item} alt={`Избранный элемент ${index + 1}`} />
                        <button className="container flex justify-end" onClick={() => toggleFavorite(item)}>
                            Удалить из избранного
                        </button>
                    </li>
                )) : (
                    <li>Нет избранной инфографики</li>
                )}
            </ul>
        </div>
    );
}

export default FavouritePage;
