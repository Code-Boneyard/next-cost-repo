import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/nested-layout';
import type { NextPageWithLayout } from '../_app';

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Admin</h3>
      <p>Come here to login to your account</p>
    </div>
  );
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Admin;