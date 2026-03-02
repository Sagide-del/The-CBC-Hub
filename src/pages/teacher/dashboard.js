export default function TeacherDashboard() {
  const resources = ['Lesson Plan 1', 'DIY Robotics Guide', 'Exam Template'];
  return (
    <div className='min-h-screen p-4 bg-gray-50'>
      <h1 className='text-3xl font-bold mb-6'>Teacher Dashboard</h1>
      <section>
        <h2 className='text-2xl font-semibold mb-4'>Resources</h2>
        <ul className='space-y-2'>
          {resources.map((res, idx) => (
            <li key={idx} className='bg-white p-4 rounded shadow flex justify-between items-center'>
              <span>{res}</span>
              <button className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>Download</button>
            </li>
          ))}
        </ul>
      </section>
      <section className='mt-8'>
        <h2 className='text-2xl font-semibold mb-4'>Material Orders</h2>
        <button className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'>Order Kits</button>
      </section>
    </div>
  );
}
