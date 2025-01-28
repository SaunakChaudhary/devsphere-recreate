const Footer = () => {
    return (
        <div className="bg-zinc-950 border-t border-zinc-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left: Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-black text-white">DevSphere</span>
                        </div>
                        <p className="text-gray-300 font-medium">
                            Development isn&apos;t just about writing perfect code - it&apos;s
                            about solving real-world problems, creating impactful solutions,
                            and learning from one another. Our mission is to eliminate the
                            barriers that slow down collaboration so developers can focus on
                            what they do best: building the future.
                        </p>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex flex-col md:items-end space-y-4 mt-8 md:mt-0 text-white">
                        <h3 className="font-bold text-lg">Connect With Us</h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://github.com/SaunakChaudhary"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="GitHub"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-github-fill text-2xl"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/saunak-chaudhary-4a4092228/"
                                className="hover:text-text-gray-300 transition-colors"
                                aria-label="LinkedIn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="ri-linkedin-fill text-2xl"></i>
                            </a>
                            <a
                                href="mailto:saunakchaudhary0404@gmail.com"
                                className="hover:text-text-gray-300 transition-colors"
                                aria-label="Email"
                            >
                                <i className="ri-mail-line text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="border-t-2 border-black mt-8 pt-6 text-center text-gray-400">
                    <p className="text-white">
                        &copy; {new Date().getFullYear()}{" "}
                        <span className="font-bold">DevSphere</span>. All rights reserved.
                    </p>
                    <p>
                        Building the future of developer collaboration, one commit at a
                        time.
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Footer
