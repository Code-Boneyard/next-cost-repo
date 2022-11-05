import type { ReactElement } from 'react';
import Layout from './../components/layout';
import NestedLayout from './../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Settings: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Settings</h3>
      <p>Come here to login to your account</p>
    </div>
  );
};

Settings.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Settings;
