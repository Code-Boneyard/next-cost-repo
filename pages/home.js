import Header from './../components/Header';

export default function Home() {
  return (
    <div>
      <Header title="dashboard" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">View Projects</div>
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">Explore Systems</div>
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">Create a Comparison</div>
          </div>
        </div>
      </main>
    </div>
  );
}
