interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-white shadow-md rounded-lg p-6">{children}</div>;
};

export default Card;
