import type { ReactElement } from 'react';
import Layout from './../../components/layout';
import NestedLayout from './../../components/nested-layout';
import type { NextPageWithLayout } from './../_app';

const Profile: NextPageWithLayout = () => {
  return (
    <div>
      <h3>Profile</h3>
      <p>Come here to update your profile</p>
    </div>
  );
};

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Profile;
