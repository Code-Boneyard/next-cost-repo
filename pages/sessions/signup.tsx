import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import NestedLayout from './../../components/nested-layout';
import type { NextPageWithLayout } from './../_app';

const Signup: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Signup</h3>
      <p>Come here to signup</p>
    </div>
  );
};

Signup.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Signup;
