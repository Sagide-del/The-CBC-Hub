import LessonCard from '../../components/LessonCard';
import ProjectCard from '../../components/ProjectCard';
import ProgressBar from '../../components/ProgressBar';

const lessons = [
  { title: 'Intro to Robotics', grade: 12, locked: false },
  { title: 'Advanced Robotics', grade: 12, locked: true },
];

const projects = [
  { title: 'Robot Arm', grade: 12, materials: ['Servo', 'Arduino', 'Wires'], locked: true },
  { title: 'Line Follower Robot', grade: 12, materials: ['Sensors', 'Arduino', 'Chassis'], locked: false },
];

export default function StudentDashboard() {
  return (
    <div className='min-h-screen p-4 bg-gray-50'>
      <h1 className='text-3xl font-bold mb-6'>Student Dashboard</h1>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Lessons</h2>
        <div className='flex flex-wrap justify-start'>
          {lessons.map((lesson, idx) => (
            <LessonCard key={idx} {...lesson} onClick={() => alert(\Start \\)} />
          ))}
        </div>
      </section>
      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>DIY Projects</h2>
        <div className='flex flex-wrap justify-start'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} onClick={() => alert(\Start \\)} />
          ))}
        </div>
      </section>
      <section>
        <h2 className='text-2xl font-semibold mb-2'>Progress</h2>
        <ProgressBar progress={60} />
      </section>
    </div>
  );
}
