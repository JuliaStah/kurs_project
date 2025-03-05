import {useState} from "react";

function FavouriteButton() {
    const [isPressed, setIsPressed] = useState(false);

    const handleClick = (e) => {
        if (isPressed) {
            setIsPressed(true);
        }
        else {
            setIsPressed(false);
        }
    };

    return (
        <button onClick={handleClick}>
            <img src={isPressed ? "images/icons/favourite-icon.png" : "images/icons/favourite-pressed-icon.png"} alt="button" width={50} height={50}/>
        </button>
    );
}

export default FavouriteButton;
