import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: Props) => {
  return (
    <h1 className={`py-2 font-bold text-white text-4xl my-4 ${className}`}>
      {children}
    </h1>
  );
};
