import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    useGSAP(
        function () {
            if (isMenuOpen) {
                gsap.to(menuRef.current, {
                    transform: "translateY(50%)",
                });
            } else {
                gsap.to(menuRef.current, {
                    transform: "translateY(-100%)",
                });
            }
        },
        [[isMenuOpen]]
    );

    return (
        <>
            <div className="flex justify-between text-white p-6 items-center bg-black">
                <h2 className="text-3xl font-extrabold">DevSphere</h2>

                {/* Desktop View */}
                <div className="hidden sm:flex space-x-4 font-bold">
                    <NavLink to="/" className="hover:text-zinc-400">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="hover:text-zinc-400">
                        About
                    </NavLink>
                    <NavLink to="/features" className="hover:text-zinc-400">
                        Features
                    </NavLink>
                    <NavLink to="/login" className="hover:text-zinc-400">
                        Login
                    </NavLink>
                </div>

                {/* Mobile View Hamburger */}
                <button
                    className="md:hidden"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    {isMenuOpen ? (
                        <i className="ri-close-large-fill text-3xl"></i>
                    ) : (
                        <i className="ri-menu-3-line text-3xl"></i>
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className="absolute top-0 left-0 w-full bg-zinc-800 z-10 transform -translate-y-full"
                    ref={menuRef}
                >
                    <div className="flex flex-col space-y-4 p-4">
                        <NavLink
                            to='/'
                            className="text-white font-bold hover:text-zinc-200"
                        >Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            className="text-white font-bold hover:text-zinc-200"
                        >About
                        </NavLink>
                        <NavLink
                            to='/features'
                            className="text-white font-bold hover:text-zinc-200"
                        >Features
                        </NavLink>
                        <NavLink
                            to='/login'
                            className="text-white font-bold hover:text-zinc-200"
                        >Login
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="mx-auto border-t border-zinc-700"></div>
        </>
    );
};

export default Navbar;