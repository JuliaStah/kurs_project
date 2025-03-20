import Table from "../components/Table";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import TableOneImgJPG from "../images/tables/table-1.jpg";
import TableTwoImgJPG from "../images/tables/table-2.jpg";
import TableThreeImgJPG from "../images/tables/table-3.jpg";
import TableOneImgPPTX from "../images/tables/table-1.pptx";
import TableTwoImgPPTX from "../images/tables/table-2.pptx";
import TableThreeImgPPTX from "../images/tables/table-3.pptx";

function TablePage() {
    return (
        <div>
            <div>
                <Table img={TableOneImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={TableOneImgPPTX} />
                    <FavouriteButton item={TableOneImgJPG} />
                </div>
            </div>
            <div>
                <Table img={TableTwoImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={TableTwoImgPPTX} />
                    <FavouriteButton item={TableTwoImgJPG} />
                </div>
            </div>
            <div>
                <Table img={TableThreeImgJPG}/>
                <div className="container flex justify-end gap-6">
                    <DownloadButton url={TableThreeImgPPTX} />
                    <FavouriteButton item={TableThreeImgJPG} />
                </div>
            </div>
        </div>
    );
}

export default TablePage;
