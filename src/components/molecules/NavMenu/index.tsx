import NavLink from "../../atoms/NavLink";

const NavMenu = () => {
  return (
    <div className="hidden md:flex gap-6">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/forecast">Forecast</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default NavMenu;
