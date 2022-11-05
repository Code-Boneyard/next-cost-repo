import { Navbar } from './Navbar';
import Meta from './Meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <main>{children}</main>
    </>
  );
}
