import { useState, useEffect } from 'react';

export default function TestSanity() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function test() {
      try {
        // Direct fetch to Sanity
        const url = 'https://oiauqspg.api.sanity.io/v2024-03-02/data/query/production?query=*[_type==\'diyProject\']';
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    test();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{padding: '20px'}}>
      <h1>Sanity Test Page</h1>
      <h2>Data from Sanity:</h2>
      <pre style={{background: '#f0f0f0', padding: '10px', overflow: 'auto'}}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
