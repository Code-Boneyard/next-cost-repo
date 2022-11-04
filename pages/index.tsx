import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MEP Systems Cost Repository</title>
        <meta name="description" content="MEP Systems Cost Repository" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h4>This is the main page.</h4>
      </main>
    </div>
  );
}
