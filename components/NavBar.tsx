export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xs">
      <nav className="m-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-tight hover:scale-105"
        >
          <img src="/favicon.png" className="w-6 h-6"/>
        </a>

        {/* NavLink */}
        <div className="flex items-center gap-4 md:gap-8 text-sm text-zinc-900">
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-200 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#Home"
          >
            Home
          </a>
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-200 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#UserCard"
          >
            Use Cases
          </a>
          <a
            className="transition duration-300 decoration-emerald-800 hover:text-zinc-200 hover:underline hover:underline-offset-4 hover:decoration-emerald-800 decoration-2"
            href="#profiles"
          >
            Explore profiles
          </a>
        </div>
      </nav>
    </header>
  );
}
