import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import NestedLayout from '../components/nested-layout';
import type { NextPageWithLayout } from './_app';

const Settings: NextPageWithLayout = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto  py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">Settings</h3>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
          {/* /End replace */}
        </div>
      </main>
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
