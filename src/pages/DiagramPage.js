import Diagram from "../components/Diagram";
import DownloadButton from "../components/DownloadButton";
import FavouriteButton from "../components/FavouriteButton";
import DiagramOneImgJPG from "../images/diagrams/diagram-1.jpg";
import DiagramTwoImgJPG from "../images/diagrams/diagram-2.jpg";
import DiagramThreeImgJPG from "../images/diagrams/diagram-3.jpg";
import DiagramOneImgPPTX from "../images/diagrams/diagram-1.pptx";
import DiagramTwoImgPPTX from "../images/diagrams/diagram-2.pptx";
import DiagramThreeImgPPTX from "../images/diagrams/diagram-3.pptx";
import {supabase} from "../client/SupabaseClient";
import {useEffect, useState} from "react";

function DiagramPage() {
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
