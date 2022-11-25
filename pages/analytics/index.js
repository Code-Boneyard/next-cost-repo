import Header from './../../components/Header';

export default function Analytics() {
  return (
    <div>
      <Header title="analytics" />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
              <p>Cost Analytics</p>
              <p>Explore historical systems costs</p>
              <p>Power BI dashboard to explore $/SF</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
