import { useState } from 'react';

const InterestSelection = () => {
    const [selectedInterests, setSelectedInterests] = useState([]);

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const languages = [
        "JavaScript", "Python", "Java", "TypeScript", "Ruby", "Go", "Rust", "C++", "PHP", "Swift",
        "Kotlin", "C#", "Perl", "Scala", "Dart", "MATLAB", "Assembly"
    ];

    const frontend = [
        "React", "Vue", "Angular", "Svelte", "NextJS", "CSS", "Tailwind", "SASS", "HTML5", "WebGL",
        "Bootstrap", "Material-UI", "Three.js", "Foundation", "Gatsby", "Electron", "Alpine.js", "Nuxt.js"
    ];

    const backend = [
        "NodeJS", "Django", "Spring", "Laravel", "Express", "GraphQL", "MongoDB", "PostgreSQL", "Redis",
        "Docker", "Flask", "Ruby on Rails", "ASP.NET", "Koa", "FastAPI", "Hapi", "NestJS", "Socket.IO",
        "MySQL", "Cassandra", "Firebase", "CouchDB", "Neo4j", "MariaDB", "Elasticsearch"
    ];

    const other = [
        "Machine Learning", "AI", "Blockchain", "IoT", "Cloud Computing", "DevOps", "Cybersecurity",
        "Game Dev", "Mobile Dev", "Data Science", "Augmented Reality (AR)", "Virtual Reality (VR)",
        "Big Data", "Quantum Computing", "Edge Computing", "Serverless", "Microservices", "Kubernetes",
        "CI/CD", "AI Ethics", "Computer Vision", "Natural Language Processing (NLP)", "OpenCV",
        "TensorFlow", "PyTorch", "Scikit-learn"
    ];

    const renderInterests = (interests, bgColor) => (
        <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
                <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-1.5 rounded border transition-colors ${
                        selectedInterests.includes(interest)
                            ? 'bg-blue-500 text-white border-blue-500'
                            : `${bgColor} border-gray-600 hover:border-gray-400`
                    }`}
                >
                    #{interest}
                </button>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto p-6">
                <div className="border border-gray-800 rounded-lg p-8 space-y-8 bg-black/30 backdrop-blur-sm">
                    <div className="text-center space-y-2 mb-8">
                        <h1 className="text-3xl font-bold">WHAT&apos;S YOUR TECH STACK?</h1>
                        <p className="text-gray-400">Select at least 3 technologies you&apos;re interested in or work with</p>
                    </div>

                    <div className="space-y-8">
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">LANGUAGES</h2>
                            {renderInterests(languages, 'bg-green-100/10')}
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">FRONTEND</h2>
                            {renderInterests(frontend, 'bg-purple-100/10')}
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">BACKEND</h2>
                            {renderInterests(backend, 'bg-orange-100/10')}
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">OTHER</h2>
                            {renderInterests(other, 'bg-pink-100/10')}
                        </section>
                    </div>

                    <div className="flex items-center justify-between pt-6">
                        <div className="text-lg">
                            {selectedInterests.length} interests selected
                        </div>
                        <button
                            disabled={selectedInterests.length < 3}
                            className={`px-8 py-2 rounded-md ${
                                selectedInterests.length >= 3
                                    ? 'bg-blue-500 hover:bg-blue-600'
                                    : 'bg-gray-600 cursor-not-allowed'
                            } transition-colors`}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterestSelection;