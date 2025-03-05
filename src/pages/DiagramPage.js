import Diagram from "../components/Diagram";
import FavouriteButton from "../components/FavouriteButton";
import DiagramOneImg from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImg from "../images/diagrams/diagram-2.jpg";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImg}/>
                <div className="container flex justify-end gap-2">
                    <FavouriteButton/>
                </div>
            </div>
            <div>
                <Diagram img={DiagramTwoImg}/>
                <div className="container flex justify-end gap-2">
                    <FavouriteButton/>
                </div>
            </div>
        </div>
    );
}

export default DiagramPage;
