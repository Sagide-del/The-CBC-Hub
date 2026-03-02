export default function InclusiveLearning() {
  const lessons = ['Adaptive Robotics', 'Assistive Tech Basics'];
  return (
    <div className='min-h-screen p-4 bg-gray-50'>
      <h1 className='text-3xl font-bold mb-6'>Inclusive Learning Center</h1>
      <ul className='space-y-2'>
        {lessons.map((l, idx) => (
          <li key={idx} className='bg-white p-4 rounded shadow'>{l}</li>
        ))}
      </ul>
    </div>
  );
}
