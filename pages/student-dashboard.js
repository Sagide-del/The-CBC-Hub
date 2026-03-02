import { useState, useEffect } from 'react';

export default function StudentDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usingHardcoded, setUsingHardcoded] = useState(false);

  // Hardcoded fallback
  const hardcodedProjects = [
    {
      _id: '1',
      title: 'Build a Recycled Robot',
      difficulty: 'Medium',
      estimatedTime: '60-90 minutes'
    }
  ];

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Try to fetch from Sanity
        const response = await fetch(
          'https://oiauqspg.api.sanity.io/v2024-03-02/data/query/production?query=*[_type=="diyProject"]'
        );
        
        if (response.ok) {
          const data = await response.json();
          if (data.result && data.result.length > 0) {
            setProjects(data.result);
            setUsingHardcoded(false);
          } else {
            // No data in Sanity, use hardcoded
            setProjects(hardcodedProjects);
            setUsingHardcoded(true);
          }
        } else {
          // API error, use hardcoded
          setProjects(hardcodedProjects);
          setUsingHardcoded(true);
        }
      } catch (error) {
        console.error('Error fetching from Sanity:', error);
        setProjects(hardcodedProjects);
        setUsingHardcoded(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  function ProjectCard({ title, difficulty, estimatedTime }) {
    const difficultyColors = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800"
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`inline-block text-xs px-2 py-1 rounded mb-2 ${
          difficultyColors[difficulty] || "bg-gray-100 text-gray-800"
        }`}>
          {difficulty}
        </p>
        <p className="text-gray-600">⏱️ {estimatedTime}</p>
      </div>
    );
  }

  function ProgressBar({ value, max }) {
    const percentage = (value / max) * 100;
    return (
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Progress</h2>
          <ProgressBar value={65} max={100} />
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard 
                key={project._id}
                title={project.title}
                difficulty={project.difficulty}
                estimatedTime={project.estimatedTime}
              />
            ))}
          </div>
          
          {usingHardcoded && (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded">
              ⚡ Using sample data. Waiting for Sanity connection...
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
