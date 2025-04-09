import 'bulma/css/bulma.css';
import "./App.css";
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DiagramPage from "./pages/DiagramPage";
import TablePage from "./pages/TablePage";
import FavouritePage from "./pages/FavouritePage";
import DownloadPage from "./pages/DownloadPage";
import SignUpPage from "./auth/sign-up/SignUpPage";
import LoginPage from "./auth/login/LoginPage";
import {useEffect, useState} from "react";
import {supabase} from "./client/SupabaseClient";

function App() {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const getUsername = async (userId) => {
        const { data, error } = await supabase
            .from('users')
            .select('username')
            .eq('id', userId)
            .single();

        if (error) {
            console.error('Error fetching username:', error);
            return null;
        }

        return data?.username;
    };



    const openModalLogin = () => {
        setModalLoginIsOpen(true);
    };

    const closeModalLogin = () => {
        setModalLoginIsOpen(false);
    };

    const openModalSignup = () => {
        setModalSignupIsOpen(true);
    };

    const closeModalSignup = () => {
        setModalSignupIsOpen(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        setUsername('');
        window.location.href = "/";
    };

    const handleSuccessfulLogin = async () => {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
            const fetchedUsername = await getUsername(user.id);
            setUsername(fetchedUsername || user.email.split('@')[0]);
            setIsAuthenticated(true);
        }
    };

    const handleSuccessfulSignup = () => {
        setIsAuthenticated(true);
        closeModalSignup();
    };

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsAuthenticated(true);
                const username = await getUsername(session.user.id);
                setUsername(username);
            }
        };
        checkSession();
    }, []);

    return (
        <div className='app-background'>
            <div className="hero is-dark">
                <div className="hero-body">
                    <a href="/"
                       className="title is-2"
                       onClick={async (e) => {
                           e.preventDefault();
                           await new Promise(resolve => setTimeout(resolve, 50));
                           window.location.href = "/";
                       }}
                    >
                        InfoGraphic
                    </a>
                    <p className="subtitle is-6">Инфографика для презентаций</p>
                </div>
            </div>
            <div className="container flex justify-end gap-4 mt-2">
                <div className='flex items-center gap-4'>
                    {isAuthenticated ? (
                        <>
                            <span className="text-purple-500">
                                Добро пожаловать, {username || 'Пользователь'}
                            </span>
                            <a className='cursor-pointer hover:underline' onClick={handleLogout}>Выйти</a>
                        </>
                    ) : (
                        <div className="flex gap-4">
                            <a className='cursor-pointer hover:underline' onClick={openModalLogin}>
                                Войти
                            </a>
                            {modalLoginIsOpen && (
                                <LoginPage
                                    closeModalLogin={closeModalLogin}
                                    onSuccessfulLogin={handleSuccessfulLogin}
                                />
                            )}

                            <a className='cursor-pointer hover:underline' onClick={openModalSignup}>
                                Зарегистрироваться
                            </a>
                            {modalSignupIsOpen && (
                                <SignUpPage
                                    closeModalSignup={closeModalSignup}
                                    onSuccessfulSignup={handleSuccessfulSignup}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-6 gap-4 mt-3">
                <Sidebar/>
                <div className="col-span-5">
                    <Route path="/diagrams">
                        <DiagramPage/>
                    </Route>
                    <Route path="/tables">
                        <TablePage/>
                    </Route>
                    <Route path="/favourite">
                        <FavouritePage/>
                    </Route>
                    <Route path="/downloads">
                        <DownloadPage/>
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;
