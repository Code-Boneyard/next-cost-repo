import type { ReactElement } from 'react';
import Layout from '../../components/Layout';
import NestedLayout from '../../components/nested-layout';
import type { NextPageWithLayout } from '../_app';

const Modeling: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Modeling</h3>
      <p>Come here to create cost models</p>
    </div>
  );
};

Modeling.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Modeling;