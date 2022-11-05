import type { ReactElement } from 'react';
import Layout from './../../components/layout';
import NestedLayout from './../../components/nested-layout';
import type { NextPageWithLayout } from './../_app';

const Projects: NextPageWithLayout = () => {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto  py-6 px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 uppercase">Projects</h3>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="h-20 rounded-lg border-4 border-dashed border-gray-200">Filter</div>

          <table className="table-auto w-full">
            <thead className="border-b">
              <tr className="bg-gray-100">
                <th className="text-left p-4 font-medium">Project</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Databank SLC6</td>
                <td className="p-4">basic@example.com</td>
                <td className="p-4">Administrator</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4">Vantage AZ11</td>
                <td className="p-4">admin@example.com</td>
                <td className="p-4">Super Administrator</td>
              </tr>
            </tbody>
          </table>
          <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">Map</div>
        </div>
      </main>
    </div>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Projects;
