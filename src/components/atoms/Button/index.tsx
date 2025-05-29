interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="bg-[#FF9D00] text-white px-4 py-2 rounded hover:bg-orange-500 transition"
    >
      {children}
    </button>
  );
};

export default Button;
