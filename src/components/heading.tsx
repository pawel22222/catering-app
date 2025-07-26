import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: Props) => {
  return (
    <h1 className={`py-2 font-bold text-green-500 text-4xl mb-4 ${className}`}>
      {children}
    </h1>
  );
};
