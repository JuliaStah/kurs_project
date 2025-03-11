import Diagram from "../components/Diagram";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import Viewing from "../components/Viewing";
import DiagramOneImg from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImg from "../images/diagrams/diagram-2.jpg";
import ViewingIcon from "../images/icons/viewing-icon.png";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImg}/>
                <div className="container flex justify-end gap-4">
                    <Viewing img={ViewingIcon}/>
                    <DownloadButton />
                    <FavouriteButton />
                </div>
            </div>
            <div>
                <Diagram img={DiagramTwoImg}/>
                <div className="container flex justify-end gap-4">
                    <Viewing img={ViewingIcon}/>
                    <DownloadButton />
                    <FavouriteButton />
                </div>
            </div>
        </div>
    );
}

export default DiagramPage;
