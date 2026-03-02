import Link from 'next/link';

export default function AdminTest() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>✅ Admin Test Page Working!</h1>
      <p>If you can see this, admin routing is working.</p>
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Back to Home
      </Link>
    </div>
  );
}
