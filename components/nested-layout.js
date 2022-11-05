import {Navbar} from './navbar';

export default function NestedLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
