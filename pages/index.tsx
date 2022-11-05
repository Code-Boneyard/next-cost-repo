import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import { Navbar } from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MEP Systems Cost Repository</title>
        <meta name="description" content="MEP Systems Cost Repository" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <h1 className="text-3xl font-bold underline">This is the main page.</h1>
        <Link href={"/home"}>Home</Link>
        <Link href={"/sessions/profile"}>Profile</Link>
        <Link href={"/settings"}>Settings</Link>
      </main>
    </div>
  );
}
