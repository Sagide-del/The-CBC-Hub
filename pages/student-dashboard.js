import { useState, useEffect } from 'react';
import Head from 'next/head';
import LessonCard from '../components/LessonCard';
import ProjectCard from '../components/ProjectCard';
import ProgressBar from '../components/ProgressBar';

export default function StudentDashboard() {
  const [lessons, setLessons] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Direct fetch to Sanity (temporary fix)
        const projectId = 'oiauqspg';
        const dataset = 'production';
        const apiVersion = '2024-03-02';
        
        // Fetch DIY projects
        const projectsUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*[_type=='diyProject'] | order(title asc)`;
        const projectsRes = await fetch(projectsUrl);
        const projectsData = await projectsRes.json();
        
        // Fetch lessons
        const lessonsUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=*[_type=='lesson'] | order(title asc)`;
        const lessonsRes = await fetch(lessonsUrl);
        const lessonsData = await lessonsRes.json();
        
        console.log('Projects:', projectsData.result);
        console.log('Lessons:', lessonsData.result);
        
        setProjects(projectsData.result || []);
        setLessons(lessonsData.result || []);
        
      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Student Dashboard - CBC Hub</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Learning Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Progress</h2>
          <ProgressBar value={65} max={100} />
        </div>

        {/* DIY Projects Section - Show first since we know it exists */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Projects</h2>
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard 
                  key={project._id}
                  title={project.title || 'Untitled'}
                  difficulty={project.difficulty || 'Medium'}
                  estimatedTime={project.estimatedTime || '30 mins'}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No DIY projects available yet.</p>
          )}
        </section>

        {/* Lessons Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
          {lessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <LessonCard 
                  key={lesson._id}
                  title={lesson.title || 'Untitled'}
                  subject={lesson.subject || 'General'}
                  grade={lesson.grade || 'All Grades'}
                  isPremium={lesson.isPremium || false}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No lessons available yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}
