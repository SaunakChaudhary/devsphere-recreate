import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="max-w-md mx-auto mt-8">
                <div className="border border-gray-800 rounded-lg p-8 space-y-8 bg-black/30 backdrop-blur-sm">
                    <div className="text-center space-y-2">
                        <h1 className="text-2xl font-bold">Reset Password</h1>
                        <p className="text-gray-400">Enter your email address to receive a password reset link</p>
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

                        <button className="w-full bg-white text-black py-2 px-4 rounded font-medium hover:bg-gray-200 transition">
                            Send Reset Link
                        </button>

                        <div className="flex justify-center text-sm text-gray-400">
                            <NavLink to="/login" className="font-semibold hover:text-white">
                                Back to Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;