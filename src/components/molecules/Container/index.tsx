interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="max-w-4xl mx-auto px-6 py-10">{children}</div>
);

export default Container;
