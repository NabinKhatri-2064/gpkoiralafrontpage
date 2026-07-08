import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="w-full border-b-white fixed  bg-white shadow-2xl mb-10">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-blue-600"
        >
          BKNR
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link
            href="/"
            className="transition hover:text-blue-600"
          >
            Generate
          </Link>

          <Link
            href="/About"
            className="transition hover:text-blue-600"
          >
            About Us
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-600"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;