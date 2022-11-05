import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import Link from 'next/link';
import type { ReactElement } from 'react';
import Layout from '../components/layout';
import NestedLayout from '../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <p>This is the index page</p>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
