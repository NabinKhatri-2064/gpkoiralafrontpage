import { Contact, Files, Info, Terminal } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b-white fixed z-10  bg-white shadow-2xl mb-10">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl Logo  text-blue-600">
          BKNR
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <a
            href="https://github.com/NabinKhatri-2064/gpkoiralafrontpage"
            className="transition hover:text-blue-600 gap-2 flex items-center"
          >
            <span>Source Code</span>
            <Terminal size={18} />
          </a>
          <Link
            href="/"
            className="transition hover:text-blue-600 flex items-center gap-2"
          >
            <span>Generate</span>
            <Files size={18} />
          </Link>

          <Link
            href="/About"
            className="transition hover:text-blue-600 flex items-center gap-2"
          >
            <span>About Us</span>
            <Info size={18} />
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-600 gap-2 flex items-center"
          >
            <span>Contact Us</span>
            <Contact size={18} />
          </Link>
        </div>

        <div className="hover:scale-105 transition-transform">
          <a
            className="bg-blue-500 p-4 rounded-md text-white hover:bg-transparent hover:outline-2 hover:text-blue-500  hover:scale-105 hover:outline-blue-500  "
            href="https://www.gpkmc.edu.np"
          >
            Visit College Website
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
