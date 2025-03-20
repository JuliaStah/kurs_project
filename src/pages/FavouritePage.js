import React from 'react';
import { useFavorites } from '../context/FavouriteContext';

function FavouritePage() {
    const { favorites, toggleFavorite } = useFavorites();

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
                    <div className="container flex justify-center">
                        Нет избранной инфографики
                    </div>
                )}
            </div>
        </div>
    );
}

export default FavouritePage;
