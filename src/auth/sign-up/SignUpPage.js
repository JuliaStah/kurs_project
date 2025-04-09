import React, { useState } from "react";
import {supabase} from "../../client/SupabaseClient";

function SignUpPage ({ closeModalSignup, onSuccessfulSignup }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangeSignupEmail = (e) => setEmail(e.target.value);
    const handleChangeSignupPassword = (e) => setPassword(e.target.value);
    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const validateForm = () => {
        const newErrors = {};
        if (!username) {
            newErrors.username = "Имя пользователя обязательно";
        }
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
            try {
                const { data, error: authError } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            username: username
                        }
                    }
                });

                if (authError) {
                    setErrors({ signup: authError.message });
                    return;
                }

                if (data.user) {
                    const { error: dbError } = await supabase
                        .from('users')
                        .insert([
                            {
                                id: data.user.id,
                                username: username,
                            }
                        ]);

                    if (dbError) {
                        setErrors({ signup: dbError.message });
                    } else {
                        console.log("Пользователь успешно зарегистрирован и добавлен в таблицу users");
                        onSuccessfulSignup();
                    }
                }
            } catch (err) {
                setErrors({ signup: err.message });
            }
        }
    };



    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>РЕГИСТРАЦИЯ</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label">Введите имя пользователя:</label>
                        <input
                            type="text"
                            className="input"
                            value={username}
                            onChange={handleChangeUsername}
                            required
                        />
                        {errors.username && <div className="error">{errors.username}</div>}
                    </div>
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
                        <button type="submit">Зарегистрироваться</button>
                        {errors.signup && <div className="error">{errors.signup}</div>}
                    </div>
                    <div>
                        <button type="button" onClick={closeModalSignup}>Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
