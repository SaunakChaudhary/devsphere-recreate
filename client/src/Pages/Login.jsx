import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="max-w-md mx-auto mt-8">
                <div className="border border-gray-800 rounded-lg p-8 space-y-8 bg-black/30 backdrop-blur-sm">
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold">Welcome</h1>
                        <p className="text-gray-400">Enter your credentials to continue & Learn something new</p>
                    </div>

                    <div className="space-y-4">
                        <button className="font-bold w-full flex items-center justify-center gap-2 py-2 px-4 rounded border border-gray-600 hover:bg-gray-800 transition">
                            <i className="ri-google-fill"></i>
                            <span>Continue with Google</span>
                        </button>

                        <div className="flex items-center gap-4">
                            <div className="h-px bg-gray-600 flex-1"></div>
                            <span className="text-gray-400 text-sm">OR CONTINUE WITH</span>
                            <div className="h-px bg-gray-600 flex-1"></div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="m@example.com"
                                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <button className="w-full bg-white text-black py-2 px-4 rounded font-medium hover:bg-gray-200 transition">
                            Login
                        </button>

                        <div className="flex justify-between text-sm text-gray-400">
                            <NavLink to="/signup" className="font-semibold hover:text-white">New to DevSphere? Create Account</NavLink>
                            <NavLink to="/forgot-password" className="font-semibold text-blue-400 hover:text-white">Forgot Password?</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;