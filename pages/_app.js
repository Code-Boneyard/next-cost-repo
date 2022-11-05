import Layout from './../components/Layout';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
