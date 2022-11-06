import Header from './../../components/Header';
import { HomeIcon } from '@heroicons/react/20/solid';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Vantage AZ11', href: '#', current: true },
];

export default function Project() {
  return (
    <div>
      <Header title="vantage az11" />
      <nav className="flex border-b border-gray-200 bg-white" aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex w-full max-w-screen-xl space-x-1 px-1 sm:px-6 lg:px-1">
          <li className="flex">
            <div className="flex items-center">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </div>
          </li>
          {pages.map((page) => (
            <li key={page.name} className="flex">
              <div className="flex items-center">
                <svg
                  className="h-full w-6 flex-shrink-0 text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true">
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
                <a href={page.href} className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current={page.current ? 'page' : undefined}>
                  {page.name}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </main>
    </div>
  );
}
