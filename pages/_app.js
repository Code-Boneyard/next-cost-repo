import Layout from './../components/Layout';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, session, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}
