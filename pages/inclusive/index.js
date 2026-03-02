import Link from 'next/link';

export default function InclusiveIndex() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Inclusive Learning Section</h1>
      <p>Welcome to the inclusive learning area!</p>
      <Link href="/" style={{color: 'blue', textDecoration: 'underline'}}>Back to Home</Link>
    </div>
  );
}
