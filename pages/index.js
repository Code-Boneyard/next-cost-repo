import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>This is the index page. You shouldnt ever see this.</p>
      <br></br>
      <p>
        Next.js has three patterns of authenticating apps: client-side, server-side, and API route authentication. It is important to choose the patterns that best fit your use
        case and application requirements.
      </p>

      <br></br>

      <p>If you are logged in, you should be redirected to the main dashboard. User login status should be remembered for 30 days. </p>
      <p>If you are not logged in, you should be redirected to the sessions/login page.</p>

      <br></br>

      <h1>Auth Providers:</h1>
      <ul>
        <li>Email</li>
        <li>MS Exchange</li>
      </ul>

      <div>
        <Link href={'sessions/login'}>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Login
          </button>
        </Link>
        <Link href={'sessions/signup'}>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
}
