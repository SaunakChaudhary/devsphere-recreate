/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { to: "/home", icon: <i className="ri-home-line text-2xl" />, text: "Home" },
        { to: "/recent-chats", icon: <i className="ri-chat-3-line text-2xl" />, text: "Messages" },
        { to: "/challenges", icon: <i className="ri-trophy-line text-2xl" />, text: "Challenges" },
        { to: "/badges", icon: <i className="ri-award-fill text-xl" />, text: "Badges & Achievements" },
        { to: "/notifications", icon: <i className="ri-notification-line text-2xl" />, text: "Notifications" },
        { to: "/profile", icon: <i className="ri-user-line text-2xl" />, text: "My Profile" },
    ];

    const NavItem = ({ to, icon, text }) => (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors ${isActive ? 'bg-gray-800 text-white' : ''
                }`
            }
            onClick={() => setIsOpen(false)}
        >
            <span className="lg:hidden mr-2">{icon}</span>
            <span className='font-bold'>{text}</span>
        </NavLink>
    );

    return (
        <>
            <nav className="bg-black border-b border-gray-800 absolute w-full top-0 z-50">
                <div className=" p-6 mx-auto">
                    <div className="flex justify-between">
                        {/* Logo/Brand */}
                        <div className="flex-shrink-0 flex items-center">
                            <h2 className="text-3xl font-extrabold text-white">DevSphere</h2>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white p-2"
                            >
                                {isOpen ? <i className="ri-close-large-fill text-2xl" /> : <i className="ri-menu-line text-2xl" />}
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex">
                            {navItems.map((item) => (
                                <NavItem key={item.to} {...item} />
                            ))}
                            <button
                                onClick={() => {/* Add logout logic here */ }}
                                className="font-bold flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
                        {navItems.map((item) => (
                            <NavItem key={item.to} {...item} />
                        ))}
                        <button
                            onClick={() => {/* Add logout logic here */ }}
                            className="w-full flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                        >
                            <i className="ri-logout-box-r-line text-2xl mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
            <div className="mx-auto border-t border-zinc-700 mb-20"></div>
        </>

    );
};

export default Navbar;
