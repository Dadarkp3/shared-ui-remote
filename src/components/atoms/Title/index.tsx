interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => (
  <h1 className="text-3xl font-bold text-[#FF9D00] mb-6">{children}</h1>
);

export default Title;
