import Table from "../components/Table";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import Viewing from "../components/Viewing";
import TableOneImgJPG from "../images/tables/table-1.jpg";
import TableTwoImgJPG from "../images/tables/table-2.jpg";
import TableOneImgPPTX from "../images/tables/table-1.pptx";
import TableTwoImgPPTX from "../images/tables/table-2.pptx";
import ViewingIcon from "../images/icons/viewing-icon.svg";

function TablePage() {
    return (
        <div>
            <div>
                <Table img={TableOneImgJPG}/>
                <div className="container flex">
                    <Viewing img={ViewingIcon}/>
                    <div className="container flex justify-end gap-4">
                        <DownloadButton urlJPG={TableOneImgJPG} urlPPTX={TableOneImgPPTX} />
                        <FavouriteButton />
                    </div>
                </div>
            </div>
            <div>
                <Table img={TableTwoImgJPG}/>
                <div className="container flex">
                    <Viewing img={ViewingIcon}/>
                    <div className="container flex justify-end gap-4">
                        <DownloadButton urlJPG={TableTwoImgJPG} urlPPTX={TableTwoImgPPTX} />
                        <FavouriteButton />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TablePage;
