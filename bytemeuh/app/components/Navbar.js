import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white p-4 shadow-lg">
      {/* Logo et Nom */}
      <Link href="/" className="flex items-center space-x-2">
        <div className="text-2xl font-bold hover:text-gray-400">
          Bytemeuh Zoo
        </div>
      </Link>

      {/* Liens */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-400">
          Accueil
        </Link>
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
    </nav>
  );
}
