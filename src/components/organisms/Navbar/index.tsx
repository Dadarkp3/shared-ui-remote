import Logo from "../../atoms/Logo";
import NavMenu from "../../molecules/NavMenu";

import "../../../index.css"; // Ensure global styles are imported
import { useState } from "react";
import MobileMenu from "../../molecules/MobileMenu";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <nav className="bg-white border-b-4 border-[#FF9D00] px-4 py-3 shadow-md relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <NavMenu />
        <button
          className="md:hidden text-[#FF9D00] focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <MobileMenu isOpen={isMobileOpen} onClose={closeMobileMenu} />
    </nav>
  );
};

export default Navbar;
