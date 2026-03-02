import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4'>
      <h1 className='text-4xl font-bold mb-6 text-center'>Welcome to The CBC Hub</h1>
      <p className='text-center text-gray-700 mb-8'>Choose your role to continue:</p>
      <div className='flex flex-col sm:flex-row gap-6'>
        <Link href='/student/dashboard'><a className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg text-center w-64'>Student</a></Link>
        <Link href='/teacher/dashboard'><a className='bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg text-center w-64'>Teacher</a></Link>
        <Link href='/inclusive'><a className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-lg text-center w-64'>Inclusive Learning</a></Link>
      </div>
    </div>
  );
}
