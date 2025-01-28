import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Features = () => {
    return (
        <div className="text-white">
            <Navbar />

            <div className="text-center py-16 px-6 bg-black">
                <h1 className="text-4xl font-semibold mb-8 text-gray-200">Our Features</h1>
                <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12">

                    {/* Showcase Projects */}
                    <div className="bg-zinc-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-5xl text-indigo-500 mb-4">
                            <i className="ri-brush-line"></i>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Showcase Projects</h2>
                        <p className="text-gray-400">Show off your personal or collaborative projects in a professional portfolio. Attract recruiters, collaborators, and employers with your work!</p>
                        <p className="text-gray-400 mt-4">Whether it&apos;s a solo project or something done in collaboration with others, showcasing your projects effectively can be a game-changer. Gain credibility by displaying the projects that highlight your skills, creativity, and technical expertise.</p>
                    </div>

                    {/* Coding Challenges */}
                    <div className="bg-zinc-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-5xl text-green-500 mb-4">
                            <i className="ri-code-line"></i>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Coding Challenges</h2>
                        <p className="text-gray-400">Enhance your coding skills with real-world challenges. Compete, learn, and grow by solving complex problems and earning rewards!</p>
                        <p className="text-gray-400 mt-4">Participate in a variety of coding challenges that push your limits and improve your problem-solving abilities. Whether you&apos;re just starting out or are a seasoned developer, there&apos;s always a challenge to help you grow.</p>
                    </div>

                    {/* Get Recognized */}
                    <div className="bg-zinc-900 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                        <div className="text-5xl text-yellow-500 mb-4">
                            <i className="ri-trophy-line"></i>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Get Recognized</h2>
                        <p className="text-gray-400">Receive recognition for your skills and achievements with badges, certificates, and personal milestones. Share your progress and stand out in the community!</p>
                        <p className="text-gray-400 mt-4">Recognition is key to growing your career. Earn badges, certificates, and milestones that showcase your achievements. Display your progress on your profile and share it with others to build your reputation in the community.</p>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Features;
