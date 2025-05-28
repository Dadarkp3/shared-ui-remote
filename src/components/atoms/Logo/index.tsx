import SunIcon from "../../../assets/sun.webp";

const Logo = () => {
  return (
    <div className="text-xl font-bold text-[#FF9D00] flex items-center gap-2">
      <img src={SunIcon} alt="Weather Friend Logo" className="w-8 h-8" />
      Weather Friend
    </div>
  );
};

export default Logo;
