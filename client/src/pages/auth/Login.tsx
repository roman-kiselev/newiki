import React, { useState } from "react";

interface LoginFormProps {
    onLogin?: (email: string, password: string) => void;
    onRegister?: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegister }) => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (isRegistering && onRegister) {
            onRegister(email, password);
        } else if (onLogin) {
            onLogin(email, password);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {isRegistering ? "Регистрация" : "Вход"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Пароль
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isRegistering ? "Зарегистрироваться" : "Войти"}
                        </button>
                    </div>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() => setIsRegistering(!isRegistering)}
                            className="text-blue-500 hover:underline"
                        >
                            {isRegistering
                                ? "Уже есть аккаунт? Войти"
                                : "Нет аккаунта? Зарегистрироваться"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const Login = () => {
    const handleLogin = (email: string, password: string) => {
        // Ваша логика входа
        console.log("Login:", email, password);
    };

    const handleRegister = (email: string, password: string) => {
        // Ваша логика регистрации
        console.log("Register:", email, password);
    };
    return (
        <div className="App">
            <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
        </div>
    );
};

export default Login;
