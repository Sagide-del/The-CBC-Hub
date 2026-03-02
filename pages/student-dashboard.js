import { useState, useEffect } from 'react';

export default function StudentDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const sanityRes = await fetch('/api/sanity-proxy');
        const sanityData = await sanityRes.json();
        console.log('Sanity data:', sanityData);

        if (sanityData.success && sanityData.data?.result) {
          // Map the Sanity data to our display format
          const mappedProjects = sanityData.data.result.map(item => ({
            _id: item._id,
            title: item.title || 'Untitled Project',
            description: item.description || '',
            difficulty: item.difficulty || 'medium',
            estimatedTime: item.estimatedTime || '30 mins',
            materials: item.materials || [],
            steps: item.steps || []
          }));
          
          setProjects(mappedProjects);
          setApiMessage(`✅ Connected to Sanity (${mappedProjects.length} project${mappedProjects.length !== 1 ? 's' : ''})`);
        } else {
          setProjects([]);
          setApiMessage('⚠️ No projects found in Sanity');
        }
      } catch (error) {
        console.error('Error:', error);
        setProjects([]);
        setApiMessage(`❌ Error: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  function ProjectCard({ project }) {
    const difficultyColors = {
      easy: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      hard: "bg-red-100 text-red-800"
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className={`inline-block text-xs px-2 py-1 rounded mb-2 ${
          difficultyColors[project.difficulty] || "bg-gray-100 text-gray-800"
        }`}>
          {project.difficulty?.charAt(0).toUpperCase() + project.difficulty?.slice(1) || 'Medium'}
        </p>
        <p className="text-gray-600 mb-3">⏱️ {project.estimatedTime}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{project.description}</p>
        
        {/* Show materials count */}
        {project.materials?.length > 0 && (
          <p className="text-xs text-gray-500 mt-2">
            🧰 {project.materials.length} materials needed
          </p>
        )}
        
        {/* Show steps count */}
        {project.steps?.length > 0 && (
          <p className="text-xs text-gray-500">
            📝 {project.steps.length} steps
          </p>
        )}
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
          
          {projects.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No DIY projects available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          )}
          
          <div className="mt-4 p-3 bg-blue-100 text-blue-800 rounded text-sm">
            Status: {apiMessage}
          </div>
        </section>
      </main>
    </div>
  );
}
