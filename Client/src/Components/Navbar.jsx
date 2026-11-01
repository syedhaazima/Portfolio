
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-purple-500/20 bg-[#090612]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wider text-white">
          Syed<span className="text-purple-400">Haazima</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "font-semibold text-purple-400"
                    : "text-gray-300 hover:text-purple-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-purple-400 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="flex flex-col gap-5 border-t border-purple-500/20 px-6 py-5 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-purple-400" : "text-gray-300"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
