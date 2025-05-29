import SunSearching from "../../../assets/sun-searching.webp";

type SearchHeaderProps = {
  text: string;
};

const SearchHeader: React.FC<SearchHeaderProps> = ({ text }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
    <img src={SunSearching} alt="Weather Pal" className="w-24 h-24" />
    <p className="text-xl text-gray-700 font-medium text-center sm:text-left">
      <span className="text-[#FF9D00] font-semibold">Your weather pal</span>,{" "}
      {text}
    </p>
  </div>
);

export default SearchHeader;
