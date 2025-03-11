import 'bulma/css/bulma.css';
import "./App.css"
import Modal from 'react-modal';
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DiagramPage from "./pages/DiagramPage";
import TablePage from "./pages/TablePage";
import FavouritePage from "./pages/FavouritePage";
import DownloadPage from "./pages/DownloadPage";
import {useState} from "react";

function App({onSubmit}) {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, signupEmail, signupPassword }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка регистрации');
            }

            const data = await response.json();
            setMessage(data.message);
            setUsername('');
            setSignupEmail('');
            setSignupPassword('');
            closeModalSignup();

        } catch (error) {
            setMessage(`Ошибка: ${error.message}`);
        }

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ loginEmail, loginPassword }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Ошибка входа');
            }

            const data = await response.json();
            setMessage(data.message);
            setIsLoggedIn(true);
            localStorage.setItem('authToken', data.token);
            closeModalLogin();

        } catch (error) {
            setMessage(`Ошибка: ${error.message}`);
        }

        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
    };


    const handleChangeLoginEmail = (event) => {
        setLoginEmail(event.target.value);
    };

    const handleChangeLoginPassword = (event) => {
        setLoginPassword(event.target.value);
    };

    const handleChangeSignupEmail = (event) => {
        setSignupEmail(event.target.value);
    };

    const handleChangeSignupPassword = (event) => {
        setSignupPassword(event.target.value);
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const modalContentLogin = (
        <div className="container">
            {isLoggedIn ? (
                <>
                    <h2>Вы вошли в систему</h2>
                    <button onClick={handleLogout}>Выйти</button>
                </>
            ) : (
                <>
            <h2>Войти в систему</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Введите эл. почту:</label>
                        <input type="email" value={loginEmail} onChange={handleChangeLoginEmail} required/>
                    </div>
                    <div>
                        <label>Введите пароль:</label>
                        <input type="password" value={loginPassword} onChange={handleChangeLoginPassword} required/>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={handleFormSubmit}>Войти</button>
            </div>
            <div>
                <button onClick={closeModalLogin}>Закрыть</button>
            </div>
            </>
            )}
        </div>
    );

    const modalContentSignup = (
        <div className="container">
            {isLoggedIn ? (
                <>
                    <h2>Вы авторизованы как {username}</h2>
                    <button onClick={handleLogout}>Выйти</button>
                </>
            ) : (
                <>
            <h2>Создать аккаунт</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Введите имя пользователя:</label>
                        <input type="text" value={username} onChange={handleChangeUsername} required/>
                    </div>
                    <div>
                        <label>Введите эл. почту:</label>
                        <input type="email" value={signupEmail} onChange={handleChangeSignupEmail} required/>
                    </div>
                    <div>
                        <label>Введите пароль:</label>
                        <input type="password" value={signupPassword} onChange={handleChangeSignupPassword} required/>
                    </div>
                </form>
            </div>
            <div>
                <button onClick={handleFormSubmit}>Зарегистрироваться</button>
            </div>
            <div>
                <button onClick={closeModalSignup}>Закрыть</button>
            </div>
            </>
            )}
        </div>
    );

    return (
        <div>
            <div className="hero is-dark">
                <div className="hero-body">
                    <p className="title is-2">InfoGraphic</p>
                    <p className="subtitle is-6">Инфографика для презентаций</p>
                </div>
            </div>
            <div className="container flex justify-end gap-4 mt-2">
                <div>
                    <button onClick={openModalLogin}>Войти</button>
                    <Modal isOpen={modalLoginIsOpen} onRequestClose={closeModalLogin}>
                        {modalContentLogin}
                    </Modal>
                </div>
                <div>
                    <button onClick={openModalSignup}>Зарегистрироваться</button>
                    <Modal isOpen={modalSignupIsOpen} onRequestClose={closeModalSignup}>
                        {modalContentSignup}
                    </Modal>
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
                </div>
                <div className="col-span-5">
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
