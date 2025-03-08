import Diagram from "../components/Diagram";
import Button from "../components/Button";
import DiagramOneImg from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImg from "../images/diagrams/diagram-2.jpg";
import FavouriteButton from "../images/icons/favourite-icon.png";
import DownloadButton from "../images/icons/download-icon.png";
import ViewingIcon from "../images/icons/viewing-icon.png";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImg}/>
                <div className="container flex justify-end gap-2">
                    <Button img={ViewingIcon}/>
                    <Button img={DownloadButton}/>
                    <Button img={FavouriteButton}/>
                </div>
            </div>
            <div>
                <Diagram img={DiagramTwoImg}/>
                <div className="container flex justify-end gap-2">
                    <Button img={ViewingIcon}/>
                    <Button img={DownloadButton}/>
                    <Button img={FavouriteButton}/>
                </div>
            </div>
        </div>
    );
}

export default DiagramPage;
