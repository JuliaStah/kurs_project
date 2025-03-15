import Diagram from "../components/Diagram";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import Viewing from "../components/Viewing";
import DiagramOneImgJPG from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImgJPG from "../images/diagrams/diagram-2.jpg";
import DiagramOneImgPPTX from "../images/diagrams/diagram-1.pptx";
import DiagramTwoImgPPTX from "../images/diagrams/diagram-2.pptx";
import ViewingIcon from "../images/icons/viewing-icon.svg";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImgJPG}/>
                <div className="container flex">
                    <Viewing img={ViewingIcon}/>
                    <div className="container flex justify-end gap-4">
                        <DownloadButton urlJPG={DiagramOneImgJPG} urlPPTX={DiagramOneImgPPTX} />
                        <FavouriteButton />
                    </div>
                </div>
            </div>
            <div>
                <Diagram img={DiagramTwoImgJPG}/>
                <div className="container flex">
                    <Viewing img={ViewingIcon}/>
                    <div className="container flex justify-end gap-4">
                        <DownloadButton urlJPG={DiagramTwoImgJPG} urlPPTX={DiagramTwoImgPPTX} />
                        <FavouriteButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiagramPage;
