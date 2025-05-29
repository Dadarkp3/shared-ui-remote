interface Props {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ to, children, onClick }: Props) => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isActive = pathname === to;

  return (
    <a
      href={to}
      onClick={onClick}
      className={`transition font-medium hover:text-[#FF9D00] ${
        isActive ? "text-[#FF9D00]" : "text-gray-700"
      }`}
    >
      {children}
    </a>
  );
};

export default NavLink;
