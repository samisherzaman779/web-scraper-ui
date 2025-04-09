"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"><h1 className="text-xl font-bold pl-5">Web Scraper</h1></Link>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className={`md:flex space-x-4 pr-5 ${menuOpen ? "block" : "hidden"} md:block`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/dashboard">Dashboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
