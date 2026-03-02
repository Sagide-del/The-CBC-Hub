import Link from 'next/link';

export default function TeacherIndex() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Teacher Section</h1>
      <p>Welcome to the teacher area!</p>
      <Link href="/" style={{color: 'blue', textDecoration: 'underline'}}>Back to Home</Link>
    </div>
  );
}
