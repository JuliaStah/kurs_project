import 'bulma/css/bulma.css';
import Modal from 'react-modal';
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import DiagramPage from "./pages/DiagramPage";
import TablePage from "./pages/TablePage";
import {useState} from "react";

function App({onSubmit}) {
    const [modalLoginIsOpen, setModalLoginIsOpen] = useState(false);
    const [modalSignupIsOpen, setModalSignupIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(email);
        onSubmit(password);
        onSubmit(username);
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };

    const modalContentLogin = (
        <div className="container">
            <h2>Войти в систему</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Введите эл. почту:</label>
                        <input value={email} onChange={handleChangeEmail}/>
                    </div>
                    <div>
                        <label>Введите пароль:</label>
                        <input value={password} onChange={handleChangePassword}/>
                    </div>
                </form>
            </div>
            <div>
                <button>Войти</button>
            </div>
            <div>
                <button onClick={closeModalLogin}>Закрыть</button>
            </div>
        </div>
    );

    const modalContentSignup = (
        <div className="container">
            <h2>Создать аккаунт</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Введите имя пользователя:</label>
                        <input value={username} onChange={handleChangeUsername}/>
                    </div>
                    <div>
                        <label>Введите эл. почту:</label>
                        <input value={email} onChange={handleChangeEmail}/>
                    </div>
                    <div>
                        <label>Введите пароль:</label>
                        <input value={password} onChange={handleChangePassword}/>
                    </div>
                </form>
            </div>
            <div>
                <button>Зарегистрироваться</button>
            </div>
            <div>
                <button onClick={closeModalSignup}>Закрыть</button>
            </div>
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
                    <button>Избранное</button>
                </div>
                <div>
                    <button>Мои загрузки</button>
                </div>
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
                    <Route path='/diagrams'>
                        <DiagramPage/>
                    </Route>
                    <Route path='/tables'>
                        <TablePage/>
                    </Route>
                </div>
            </div>
        </div>
    );
}

export default App;