import NavLink from "../../atoms/NavLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <button
          onClick={onClose}
          className="text-2xl text-[#FF9D00] px-4 py-3 self-end focus:outline-none"
          aria-label="Close menu"
        >
          ×
        </button>

        <nav className="flex flex-col gap-4 px-6 py-4">
          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/forecast" onClick={onClose}>
            Forecast
          </NavLink>
          <NavLink to="/about" onClick={onClose}>
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
