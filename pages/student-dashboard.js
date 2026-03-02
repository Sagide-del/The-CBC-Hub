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
        
        // Fetch from your live Strapi backend
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'https://cbchub.kuberns.app';
        
        const [lessonsRes, projectsRes] = await Promise.all([
          fetch(`${strapiUrl}/api/lessons?populate=*`),
          fetch(`${strapiUrl}/api/diy-projects?populate=*`)
        ]);

        const lessonsData = await lessonsRes.json();
        const projectsData = await projectsRes.json();

        setLessons(lessonsData.data || []);
        setProjects(projectsData.data || []);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const progress = 65; // Example progress

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
          <p className="text-red-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
        
        {/* Progress Overview */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">My Progress</h2>
          <ProgressBar value={progress} max={100} />
        </div>

        {/* Lessons Section */}
        {lessons.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Lessons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lessons.map((lesson) => (
                <LessonCard 
                  key={lesson.id}
                  title={lesson.attributes?.title || 'Untitled'}
                  subject={lesson.attributes?.subject || 'General'}
                  grade={lesson.attributes?.grade || 'All Grades'}
                  isPremium={lesson.attributes?.isPremium || false}
                />
              ))}
            </div>
          </section>
        )}

        {/* DIY Projects Section */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.attributes?.title || 'Untitled'}
                  difficulty={project.attributes?.difficulty || 'Medium'}
                  estimatedTime={project.attributes?.estimatedTime || '30 mins'}
                />
              ))}
            </div>
          </section>
        )}

        {/* Show message if no content */}
        {lessons.length === 0 && projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No content available yet. Check back soon!</p>
          </div>
        )}
      </main>
    </div>
  );
}
