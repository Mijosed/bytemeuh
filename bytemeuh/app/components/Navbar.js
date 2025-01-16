"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="flex items-center justify-between">
        
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold hover:text-gray-400">Bytemeuh Zoo</div>
        </Link>

       
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        
        <div className="hidden sm:flex space-x-6">
          <Link href="/activites" className="hover:text-gray-400">
            Activités
          </Link>
          <Link href="/services" className="hover:text-gray-400">
            Services
          </Link>
          <Link href="/actualites" className="hover:text-gray-400">
            Actualités
          </Link>
          <Link href="/nos-animaux" className="hover:text-gray-400">
            Nos Animaux
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-4">
          <Link href="/activites" className="block hover:text-gray-400">
            Activités
          </Link>
          <Link href="/services" className="block hover:text-gray-400">
            Services
          </Link>
          <Link href="/actualites" className="block hover:text-gray-400">
            Actualités
          </Link>
          <Link href="/nos-animaux" className="block hover:text-gray-400">
            Nos Animaux
          </Link>
          <Link href="/contact" className="block hover:text-gray-400">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
