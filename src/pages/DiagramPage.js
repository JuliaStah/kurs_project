import Diagram from "../components/Diagram";
import DiagramOneImg from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImg from "../images/diagrams/diagram-2.jpg";

function DiagramPage() {
    return (
        <div>
            <div>
                <Diagram img={DiagramOneImg}/>
            </div>
            <div>
                <Diagram img={DiagramTwoImg}/>
            </div>
        </div>
    );
}

export default DiagramPage;