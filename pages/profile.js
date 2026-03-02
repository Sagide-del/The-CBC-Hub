import Link from 'next/link';

export default function Profile() {
  return (
    <div style={{padding: '20px'}}>
      <h1>My Profile</h1>
      <p>Profile page coming soon!</p>
      <Link href="/" style={{color: 'blue', textDecoration: 'underline'}}>Back to Home</Link>
    </div>
  );
}
