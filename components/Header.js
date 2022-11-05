export default function Header({ title }) {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto  py-4 px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight uppercase">{title}</h3>
        </div>
      </header>
    </>
  );
}
