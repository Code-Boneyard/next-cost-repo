import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
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
  return <Layout>{page}</Layout>;
};

export default Admin;
