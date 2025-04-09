import Table from "../components/Table";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import TableOneImgJPG from "../images/tables/table-1.jpg";
import TableTwoImgJPG from "../images/tables/table-2.jpg";
import TableThreeImgJPG from "../images/tables/table-3.jpg";
import TableOneImgPPTX from "../images/tables/table-1.pptx";
import TableTwoImgPPTX from "../images/tables/table-2.pptx";
import TableThreeImgPPTX from "../images/tables/table-3.pptx";
import {supabase} from "../client/SupabaseClient";
import {useEffect, useState} from "react";

function TablePage() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error) {
                console.error('Ошибка получения пользователя:', error);
            } else {
                setUser(user);
            }
            setLoading(false);
        };

        fetchUser();
    },[]);

    if (loading) {
        return <div className='text-purple-500'>Загрузка...</div>;
    }

    if (!user) {
        return <div className='container flex justify-center text-purple-500'>Просмотр инфографических материалов доступен только авторизованным пользователям.
            Пожалуйста, войдите в аккаунт.</div>;
    }

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
