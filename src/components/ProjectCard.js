export default function ProjectCard({ title, grade, materials, locked, onClick }) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex flex-col w-full sm:w-64 m-2'>
      <h3 className='font-bold text-lg mb-2'>{title}</h3>
      <p className='text-gray-600 mb-2'>Grade {grade}</p>
      <p className='text-gray-500 mb-4'>Materials: {materials.join(', ')}</p>
      {locked ? (
        <button className='bg-gray-400 text-white py-2 px-4 rounded cursor-not-allowed' disabled>Locked</button>
      ) : (
        <button onClick={onClick} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>Start Project</button>
      )}
    </div>
  );
}
