import Table from "../components/Table";
import Button from "../components/Button";
import TableOneImg from "../images/tables/table-1.jpg";
import TableTwoImg from "../images/tables/table-2.jpg";
import ViewingIcon from "../images/icons/viewing-icon.png";
import DownloadButton from "../images/icons/download-icon.png";
import FavouriteButton from "../images/icons/favourite-icon.png";

function TablePage() {
    return (
        <div>
            <div>
                <Table img={TableOneImg}/>
                <div className="container flex justify-end gap-2">
                    <Button img={ViewingIcon}/>
                    <Button img={DownloadButton}/>
                    <Button img={FavouriteButton}/>
                </div>
            </div>
            <div>
                <Table img={TableTwoImg}/>
                <div className="container flex justify-end gap-2">
                    <Button img={ViewingIcon}/>
                    <Button img={DownloadButton}/>
                    <Button img={FavouriteButton}/>
                </div>
            </div>
        </div>
    );
}

export default TablePage;
