import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';


export default function Home() {
  return (
    <html className="h-full bg-gray-100">
      <Head>
        <title>MEP Systems Cost Repository</title>
        <meta name="description" content="MEP Systems Cost Repository" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className="h-full">
        <div className="min-h-full">

          <main>
            <h1 className="text-3xl font-bold underline">This is the main page.</h1>
          </main>
        </div>
      </body>
    </html>
  );
}
