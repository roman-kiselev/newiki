import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavLink: React.FC<{
    to: string;
    children: React.ReactNode;
    activeClassName?: string;
    onClick?: () => void;
    className?: string;
}> = ({ to, activeClassName, children, onClick, className }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link
            to={to}
            className={`${
                isActive ? activeClassName : className
            } text-white hover:text-yellow-300`}
            onClick={onClick}
        >
            {children}
        </Link>
    );
};

const LayoutTest = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="text-xl font-bold">Мой проект</div>
                <nav className="hidden lg:flex space-x-4">
                    <NavLink to="/" activeClassName="text-yellow-300">
                        Главная
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-yellow-300">
                        О нас
                    </NavLink>
                    <NavLink to="/contact" activeClassName="text-yellow-300">
                        Контакты
                    </NavLink>
                    {/* Добавьте другие ссылки здесь */}
                </nav>
            </header>

            {/* Mobile Menu (Drawer) */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black/50 z-50 transition-opacity duration-300 ${
                    mobileMenuOpen
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={toggleMobileMenu} // Закрытие по клику вне меню
            >
                <div
                    className="fixed top-0 left-0 h-full w-64 bg-blue-500 text-white p-4 shadow-lg transform transition-transform duration-300"
                    style={{
                        transform: mobileMenuOpen
                            ? "translateX(0)"
                            : "translateX(-100%)",
                    }} // Анимация сдвига
                    onClick={(e) => e.stopPropagation()} // Предотвращение закрытия по клику внутри меню
                >
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-4 right-4 text-white p-2 rounded focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <nav>
                        <NavLink
                            to="/"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-4 hover:bg-blue-700"
                        >
                            Главная
                        </NavLink>
                        <NavLink
                            to="/about"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-4 hover:bg-blue-700"
                        >
                            О нас
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={toggleMobileMenu}
                            className="block py-2 px-4 hover:bg-blue-700"
                        >
                            Контакты
                        </NavLink>
                        {/* Добавьте другие ссылки здесь */}
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow p-4">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; {new Date().getFullYear()} Мой проект
            </footer>
        </div>
    );
};

export default LayoutTest;
