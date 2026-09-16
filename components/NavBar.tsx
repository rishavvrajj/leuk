export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
      <nav className="m-4 flex items-center justify-between px-6">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight hover:scale-105"
        >
          <img src="/favicon.png" className="w-8 h-8"/>
        </a>

        {/* NavLink */}
        <div className="items-center gap-8 text-sm text-zinc-400 md:flex">
          <a
            className="transition hover:text-zinc-100"
            href="#usecase"
          >
            Home
          </a>
          <a
            className="transition hover:text-zinc-100"
            href="#beliefs"
          >
            Use Cases
          </a>
          <a
            className="transition hover:text-zinc-100"
            href="#profiles"
          >
            Explore profiles
          </a>
        </div>
      </nav>
    </header>
  );
}
