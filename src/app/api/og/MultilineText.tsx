import { HTMLAttributes } from "react";

type MultilineTextProps = HTMLAttributes<HTMLSpanElement> & {
  children: string;
};

const MultilineText: React.FC<MultilineTextProps> = ({
  children,
  ...props
}) => (
  <span {...props}>
    {children.split(/\\n/g).map((line, idx) => (
      <span key={idx}>{line}</span>
    ))}
  </span>
);

export default MultilineText;
