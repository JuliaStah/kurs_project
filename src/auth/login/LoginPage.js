import React, { useState } from "react";
import {supabase} from "../../client/SupabaseClient";

function SignUpPage ({ closeModalLogin, onSuccessfulLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChangeSignupEmail = (e) => setEmail(e.target.value);
    const handleChangeSignupPassword = (e) => setPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.signupEmail = "Электронная почта обязательна";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.signupEmail = "Электронная почта не валидна";
        }
        if (!password) {
            newErrors.signupPassword = "Пароль обязателен";
        } else if (password.length < 6) {
            newErrors.signupPassword = "Пароль должен состоять хотя бы из 6 символов";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const { user, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                setErrors({ login: error.message });
            } else {
                console.log("Вошел в аккаунт:", { user });
                onSuccessfulLogin();
            }
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>ВХОД В АККАУНТ</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">Введите эл. почту:</label>
                        <input
                            type="email"
                            className="input"
                            value={email}
                            onChange={handleChangeSignupEmail}
                            required
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div>
                        <label className="label">Введите пароль:</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                value={password}
                                onChange={handleChangeSignupPassword}
                                required
                            />
                            <button
                                type="button"
                                onClick={toggleShowPassword}
                                style={{ marginLeft: '8px' }}
                            >
                            </button>
                        </div>
                        {errors.signupPassword && <div className="error">{errors.signupPassword}</div>}
                    </div>
                    <div>
                        <button type="submit">Войти</button>
                        {errors.login && <div className="error">{errors.login}</div>}
                    </div>
                    <div>
                        <button type="button" onClick={closeModalLogin}>Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
