import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

const authOptions = {
  providers: [
    GithubProvider({
      clientId: '5af6163b7efa8c6ccefb',
      clientSecret: '9c3504bb955659a728c38e912e707866333abc03',
    }),
  ],
};
export default NextAuth(authOptions);
