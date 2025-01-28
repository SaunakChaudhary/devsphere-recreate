import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-28 px-10">
          <motion.h1
            className="text-white text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Developers Globally
          </motion.h1>
          <p className="text-gray-400 text-lg mb-8">
            Ready to level up your coding journey
          </p>
          <div className="space-x-4">
            <button className="cursor-pointer px-6 py-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
              Get Started <i className="ri-arrow-right-line"></i>
            </button>
            <button
              className="cursor-pointer px-6 py-3 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700"
              onClick={() => navigate("/features")}
            >
              Explore Features <i className="ri-compass-line"></i>
            </button>
          </div>
        </section>

        <div className="mx-auto border-t border-zinc-700"></div>

        {/* Benefits Section */}
        <section className="py-20 px-10">
          <h2 className="text-center text-3xl font-bold text-white mb-12">Why Choose DevSphere?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="ri-gallery-line text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Showcase Projects</h3>
              <p className="text-gray-400">
                Build your portfolio and share your coding projects with a global community of developers.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="ri-bar-chart-grouped-line text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Seamless Scaling</h3>
              <p className="text-gray-400">
                Easily scale your projects without worrying about infrastructure limits.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <i className="ri-global-line text-indigo-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold text-white mb-4">Global Access</h3>
              <p className="text-gray-400">
                Connect and work with your team from anywhere in the world.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto border-t border-zinc-700"></div>

        {/* Call to Action Section */}
        <section className="py-20 px-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of developers who are building amazing projects with DevSphere.
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer px-6 py-3 rounded-md bg-indigo-500 text-white hover:bg-indigo-600">
            Sign Up Today <i className="ri-user-add-line"></i>
          </button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
