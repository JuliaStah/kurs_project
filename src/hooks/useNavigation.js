import {useContext} from "react";
import NavigationContext from "../context/NavigationProvider";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;