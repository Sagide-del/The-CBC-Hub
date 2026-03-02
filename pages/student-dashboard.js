import { useState, useEffect } from 'react';
import Head from 'next/head';

// Simple components inline since we're having import issues
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

export default function StudentDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Direct fetch to Sanity - hardcoded for reliability
        const response = await fetch(
          'https://oiauqspg.api.sanity.io/v2024-03-02/data/query/production?query=*[_type == "diyProject"]'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Sanity data:', data);
        setProjects(data.result || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Student Dashboard - CBC Hub</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning Dashboard</h1>
        
        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Progress</h2>
          <ProgressBar value={65} max={100} />
        </div>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Projects</h2>
          
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Error: {error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          )}

          {!loading && !error && projects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects available yet.</p>
            </div>
          )}

          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard 
                  key={project._id}
                  title={project.title || 'Untitled Project'}
                  difficulty={project.difficulty || 'Medium'}
                  estimatedTime={project.estimatedTime || '30 mins'}
                />
              ))}
            </div>
          )}
        </section>

        {/* Debug info - remove after working */}
        {!loading && !error && (
          <div className="mt-8 p-4 bg-gray-100 rounded text-xs">
            <p>Debug: Found {projects.length} projects</p>
          </div>
        )}
      </main>
    </div>
  );
}
