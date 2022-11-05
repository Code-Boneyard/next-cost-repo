import Link from 'next/link';

export default function Settings() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">This is the settings page.</h1>
        <Link href="/home">Back to Home</Link>
      </main>
    </div>
  );
}
