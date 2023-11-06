import Link from "next/link";
import React from "react";
import { FaListAlt } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Testimonials", href: "/testimonials" },
  ];

  return (
    <nav className="flex space-x-6  mb-5 px-5 h-14 items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-2">
        <FaListAlt />
        <p className="font-bold text-xl">Listicle</p>
        </div>
      </Link>
      <ul className="flex space-x-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-sky-800 hover:text-sky-950 transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
