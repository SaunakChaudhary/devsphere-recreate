import Navbar from "../../Components/User/Navbar"
import { useState } from "react"

const MyProfile = () => {
  const [userInfo] = useState({
    name: "Saunak Chaudhary",
    username: "@Saunak_004",
    bio: "Full Stack Developer | MERN Stack | Open Source Enthusiast",
    avatar: "https://placehold.co/400",
    stats: {
      followers: 234,
      following: 156,
      projects: 12,
      points: 1580,
    },
  })

  const [projects] = useState([
    {
      id: 1,
      title: "Chatting Application",
      description:
        "A real-time chat application with features like one-on-one messaging, group chats, and file sharing.",
      tags: ["React", "NodeJS", "MongoDB", "Socket.IO", "Express", "Tailwind"],
      likes: 4,
      comments: 2,
    },
    // Add more projects as needed
  ])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-20 py-8">
        {/* User Info Section */}
        <section className="bg-zinc-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src={userInfo.avatar || "/placeholder.svg"}
                alt={userInfo.name}
                className="w-24 h-24 rounded-full border-4 border-primary"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">{userInfo.name}</h1>
                <p className="text-gray-400">{userInfo.username}</p>
                <p className="text-gray-300 mt-2 max-w-2xl">{userInfo.bio}</p>
              </div>
            </div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg transition-colors">
              <i className="ri-edit-2-line mr-2"></i>
              Edit Profile
            </button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Followers", value: userInfo.stats.followers, icon: "ri-team-line text-white" },
            { label: "Following", value: userInfo.stats.following, icon: "ri-user-follow-line text-white" },
            { label: "Projects", value: userInfo.stats.projects, icon: "ri-folder-line text-white" },
            { label: "Points", value: userInfo.stats.points, icon: "ri-medal-line text-white" },
          ].map((stat, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg p-6 text-center">
              <i className={`${stat.icon} text-2xl text-primary mb-2`}></i>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Projects</h2>
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-lg transition-colors">
              <i className="ri-add-line mr-2"></i>
              New Project
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-zinc-900 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={userInfo.avatar || "/placeholder.svg"}
                      alt={userInfo.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-white">{userInfo.name}</h3>
                      <p className="text-sm text-gray-400">{userInfo.username}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <i className="ri-more-2-fill"></i>
                  </button>
                </div>

                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-gray-400">
                  <button className="flex items-center gap-1 hover:text-primary">
                    <i className="ri-heart-line"></i>
                    <span>{project.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary">
                    <i className="ri-chat-1-line"></i>
                    <span>{project.comments}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


export default MyProfile