import { useState, useEffect } from 'react';

export default function StudentDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const url = 'https://oiauqspg.api.sanity.io/v2024-03-02/data/query/production?query=*[_type==\'diyProject\']';
        const response = await fetch(url);
        const data = await response.json();
        console.log('Raw data:', data);
        setProjects(data.result || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{padding: '20px'}}>
      <h1>Student Dashboard</h1>
      <h2>DIY Projects ({projects.length})</h2>
      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project._id}>
              <h3>{project.title}</h3>
              <p>Difficulty: {project.difficulty}</p>
              <p>Time: {project.estimatedTime}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
