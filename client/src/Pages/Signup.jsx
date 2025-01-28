import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Signup = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="max-w-md mx-auto p-6">
                <div className="border border-gray-800 rounded-lg p-8 bg-black/30">
                    <h1 className="text-3xl text-center font-bold mb-2">Join DevSphere</h1>
                    <p className="text-gray-400 text-center mb-6">Create an account to contribute & Learn something new</p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="m@example.com"
                                className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">GitHub Profile (Optional)</label>
                            <input
                                type="url"
                                className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">LinkedIn Profile (Optional)</label>
                            <input
                                type="url"
                                className="w-full px-3 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button className="cursor-pointer w-full bg-white text-black py-2 px-4 rounded-md font-medium hover:bg-gray-100 transition">
                            Create account
                        </button>

                        <button className="cursor-pointer w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md border border-gray-800 hover:bg-gray-900 transition">
                            Create account as Organization
                        </button>

                        <div className="text-center text-sm text-gray-400">
                            <NavLink to="/login" className="hover:text-white">
                                Already have an account? Login
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;