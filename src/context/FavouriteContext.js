import React, { createContext, useState, useContext } from 'react';

const FavouriteContext = createContext();

export function useFavorites() {
    return useContext(FavouriteContext);
}

function FavouriteProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const toggleFavorite = (item) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.includes(item)) {
                return prevFavorites.filter(fav => fav !== item);
            } else {
                return [...prevFavorites, item];
            }
        });
    };

    return (
        <FavouriteContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavouriteContext.Provider>
    );
}

export {FavouriteProvider};
export default FavouriteContext;
