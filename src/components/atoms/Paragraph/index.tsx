interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => (
  <p className="text-gray-700 text-lg leading-relaxed mb-4">{children}</p>
);

export default Paragraph;
