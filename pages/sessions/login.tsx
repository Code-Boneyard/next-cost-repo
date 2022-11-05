import type { ReactElement } from 'react';
import Layout from './../../components/layout';
import NestedLayout from './../../components/nested-layout';
import type { NextPageWithLayout } from './../_app';

const Login: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Login</h3>
      <p>Come here to login to your account</p>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Login;
