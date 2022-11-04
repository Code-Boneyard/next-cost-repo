import Link from 'next/link';

export default function Test() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">This is the test page.</h1>
        <Link href="/">Back to Home</Link>
      </main>
    </div>
  );
}
