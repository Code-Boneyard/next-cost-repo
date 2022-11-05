import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">This is the Login page.</h1>
        <Link href="/home">Back to Home</Link>
      </main>
    </div>
  );
}
