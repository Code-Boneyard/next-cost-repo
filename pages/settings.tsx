import type { ReactElement } from 'react';
import Layout from './../components/layout';
import NestedLayout from './../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Settings: NextPageWithLayout = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto  py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">Settings</h3>
        </div>
      </header>
      <p>Come here to change settings</p>
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
