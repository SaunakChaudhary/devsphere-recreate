import Navbar from "../../Components/User/Navbar"

const HomePage = () => {
    // Mock data for posts
    const posts = [
        {
            id: 1,
            user: {
                name: "John Doe",
                avatar: "https://placehold.co/100x100",
                username: "@johndoe",
            },
            content: "Just finished a new project! #webdev #react",
            image: "https://placehold.co/600x400",
            likes: 42,
            comments: 5,
            shares: 2,
        },
        {
            id: 2,
            user: {
                name: "Jane Smith",
                avatar: "https://placehold.co/100x100",
                username: "@janesmith",
            },
            content: "Learning new JavaScript frameworks is always exciting! 🚀 #javascript #learning",
            likes: 38,
            comments: 7,
            shares: 1,
        },
        {
            id: 3,
            user: {
                name: "Alex Johnson",
                avatar: "https://placehold.co/100x100",
                username: "@alexj",
            },
            content: "Beautiful day for some outdoor coding! ☀️💻 #remotework",
            image: "https://placehold.co/600x400",
            likes: 56,
            comments: 3,
            shares: 4,
        },
        {
            id: 2,
            user: {
                name: "Jane Smith",
                avatar: "https://placehold.co/100x100",
                username: "@janesmith",
            },
            content: "Learning new JavaScript frameworks is always exciting! 🚀 #javascript #learning",
            likes: 38,
            comments: 7,
            shares: 1,
        },
        {
            id: 1,
            user: {
                name: "John Doe",
                avatar: "https://placehold.co/100x100",
                username: "@johndoe",
            },
            content: "Just finished a new project! #webdev #react",
            image: "https://placehold.co/600x400",
            likes: 42,
            comments: 5,
            shares: 2,
        },
        {
            id: 3,
            user: {
                name: "Alex Johnson",
                avatar: "https://placehold.co/100x100",
                username: "@alexj",
            },
            content: "Beautiful day for some outdoor coding! ☀️💻 #remotework",
            image: "https://placehold.co/600x400",
            likes: 56,
            comments: 3,
            shares: 4,
        },
    ]

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <div className="container mx-auto px-4 sm:px-10 py-5">
                {/* Search bar container */}
                <div className="relative w-full sm:w-1/4 mb-8">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pr-10 border p-2 rounded-lg w-full border-gray-800 bg-zinc-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    {/* Search icon */}
                    <i className="ri-search-line absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400"></i>
                </div>

                {/* Posts container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-zinc-900 rounded-lg p-4">
                            <div className="flex items-center mb-4">
                                <img
                                    src={post.user.avatar || "/placeholder.svg"}
                                    alt={post.user.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <h3 className="font-semibold">{post.user.name}</h3>
                                    <p className="text-gray-400 text-sm">{post.user.username}</p>
                                </div>
                            </div>

                            <p className="mb-4">{post.content}</p>

                            {post.image && (
                                <img src={post.image || "/placeholder.svg"} alt="Post content" className="rounded-lg mb-4 w-full" />
                            )}

                            <div className="flex gap-4 text-gray-400">
                                <button className="flex items-center hover:text-indigo-500 transition-colors">
                                    <i className="ri-heart-3-line mr-1"></i>
                                    <span>{post.likes}</span>
                                </button>
                                <button className="flex items-center hover:text-indigo-500 transition-colors">
                                    <i className="ri-chat-1-line mr-1"></i>
                                    <span>{post.comments}</span>
                                </button>
                                <button className="flex items-center hover:text-indigo-500 transition-colors">
                                    <i className="ri-share-forward-line mr-1"></i>
                                    <span>{post.shares}</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default HomePage

