import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-gradient-to-l from-[#8EE2FF] via-[#C0FFFE] to-white shadow-sm relative z-50 sticky top-0">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src="/assets/img/logo/logomd-blb.png" alt="PT Mangatur Dharma Logo" className="w-30 h-14 rounded-full" />
        </Link>

        {/* Navigasi */}
        <nav className="hidden md:flex items-center space-x-8" onMouseLeave={handleMouseLeave}>
          <Link to="/" className="text-primary hover:text-primary/80 font-medium">
            Home
          </Link>

          {/* Profil Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle('profil')} onMouseEnter={() => setActiveDropdown('profil')} className="flex items-center space-x-1 text-primary hover:text-primary/80 font-medium">
              <span>Profil</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'profil' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-[var(--shadow-dropdown)] border border-gray-200 py-2 z-50">
                <Link to="/tentang-perusahaan" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Tentang Perusahaan
                </Link>
                <Link to="/jejak-langkah" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Jejak Langkah
                </Link>
                <Link to="/visi-misi" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Visi & Misi
                </Link>
              </div>
            )}
          </div>

          {/* Produk Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle('produk')} onMouseEnter={() => setActiveDropdown('produk')} className="flex items-center space-x-1 text-primary hover:text-primary/80 font-medium">
              <span>Produk</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'produk' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-[var(--shadow-dropdown)] border border-gray-200 py-2 z-50">
                <Link to="/air-filter" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Air Filter
                </Link>
                <Link to="/fuel-lube-fuel" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Fuel & Lube Fuel
                </Link>
                <Link to="/hvac" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  HVAC
                </Link>
                <Link to="/air-purifier" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Air Purifier
                </Link>
                <Link to="/raditor" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Raditor
                </Link>
                <Link to="/lainnya" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Lainnya
                </Link>
              </div>
            )}
          </div>

          <Link to="/our-category" className="text-primary hover:text-primary/80 font-medium">
            Our Category
          </Link>

          {/* Berita Dropdown */}
          <div className="relative">
            <button onClick={() => handleDropdownToggle('berita')} onMouseEnter={() => setActiveDropdown('berita')} className="flex items-center space-x-1 text-primary hover:text-primary/80 font-medium">
              <span>Berita</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === 'berita' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-[var(--shadow-dropdown)] border border-gray-200 py-2 z-50">
                <Link to="/penghargaan" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Penghargaan
                </Link>
                <Link to="/aktifitas" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Aktifitas
                </Link>
                <Link to="/artikel" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Artikel
                </Link>
                <Link to="/daftar-pelanggan" className="block px-4 py-2 text-gray-700 hover:bg-secondary hover:text-primary">
                  Daftar Pelanggan
                </Link>
              </div>
            )}
          </div>

          <Link to="/kontak" className="text-primary hover:text-primary/80 font-medium">
            Kontak
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
