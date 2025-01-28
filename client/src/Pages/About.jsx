import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-zinc-900 min-h-screen">

        {/* Our Mission Section */}
        <section className="py-20 px-10 bg-black text-center">
          <h2 className="text-white text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            DevSphere is built on the belief that great code comes from collaboration, continuous learning, and community support. We&apos;re creating a space where developers can showcase their work, learn from peers, and get recognized for their skills.          </p>
        </section>
        
        <div className="mx-auto border-t border-zinc-700"></div>

        {/* Our Values Section */}
        <section className="py-20 px-10 text-center bg-zinc-950">
          <h2 className="text-white text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-400 leading-relaxed">
                We embrace change and continuously strive to stay ahead of industry trends,
                offering solutions that are as forward-thinking as our users.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
              <p className="text-gray-400 leading-relaxed">
                Collaboration is at the heart of everything we do. We believe great ideas are born
                when people work together seamlessly and effectively.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                We hold ourselves to the highest standards, ensuring that every product, feature, and
                interaction exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto border-t border-zinc-700"></div>
        
        {/* Meet the Team Section */}
        <section className="py-20 px-10 bg-black text-center">
          <h2 className="text-white text-4xl font-bold mb-12">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            Our team is composed of passionate individuals dedicated to making DevSphere a leader in developer tools.
            With expertise in technology, design, and customer success, we work tirelessly to bring our vision to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white">Saunak Chaudhary</h3>
              <p className="text-gray-400">Founder & CEO</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white">...</h3>
              <p className="text-gray-400">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-white">...</h3>
              <p className="text-gray-400">Head of Product</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
