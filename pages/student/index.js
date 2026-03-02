import Link from 'next/link';

export default function StudentIndex() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Student Section</h1>
      <p>Welcome to the student area!</p>
      <Link href="/" style={{color: 'blue', textDecoration: 'underline'}}>Back to Home</Link>
    </div>
  );
}
