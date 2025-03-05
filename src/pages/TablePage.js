import Table from "../components/Table";
import FavouriteButton from "../components/FavouriteButton";
import TableOneImg from "../images/tables/table-1.jpg";
import TableTwoImg from "../images/tables/table-2.jpg";

function TablePage() {
    return (
        <div>
            <div>
                <Table img={TableOneImg}/>
                <div className="container flex justify-end gap-2">
                </div>
            </div>
            <div>
                <Table img={TableTwoImg}/>
                <div className="container flex justify-end gap-2">
                </div>
            </div>
        </div>
    );
}

export default TablePage;
