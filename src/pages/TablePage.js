import Table from "../components/Table";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import Viewing from "../components/Viewing";
import TableOneImg from "../images/tables/table-1.jpg";
import TableTwoImg from "../images/tables/table-2.jpg";
import ViewingIcon from "../images/icons/viewing-icon.png";

function TablePage() {
    return (
        <div>
            <div>
                <Table img={TableOneImg}/>
                <div className="container flex justify-end gap-4">
                    <Viewing img={ViewingIcon}/>
                    <DownloadButton />
                    <FavouriteButton />
                </div>
            </div>
            <div>
                <Table img={TableTwoImg}/>
                <div className="container flex justify-end gap-4">
                    <Viewing img={ViewingIcon}/>
                    <DownloadButton />
                    <FavouriteButton />
                </div>
            </div>
        </div>
    );
}

export default TablePage;
