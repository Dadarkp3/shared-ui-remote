interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF9D00]"
    />
  );
};

export default Input;
