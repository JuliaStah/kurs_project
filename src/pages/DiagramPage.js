import Diagram from "../components/Diagram";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import DiagramOneImgJPG from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImgJPG from "../images/diagrams/diagram-2.jpg";
import DiagramThreeImgJPG from "../images/diagrams/diagram-3.jpg";
import DiagramOneImgPPTX from "../images/diagrams/diagram-1.pptx";
import DiagramTwoImgPPTX from "../images/diagrams/diagram-2.pptx";
import DiagramThreeImgPPTX from "../images/diagrams/diagram-3.pptx";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={DiagramOneImgPPTX} />
                    <FavouriteButton item={DiagramOneImgJPG} />
                </div>
            </div>
            <div>
                <Diagram img={DiagramTwoImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={DiagramTwoImgPPTX} />
                    <FavouriteButton item={DiagramTwoImgJPG} />
                </div>
            </div>
            <div>
                <Diagram img={DiagramThreeImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={DiagramThreeImgPPTX} />
                    <FavouriteButton item={DiagramThreeImgJPG} />
                </div>
            </div>
        </div>
    );
}

export default DiagramPage;
