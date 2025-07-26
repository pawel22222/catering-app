import LinkNext from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
};

export const Link = ({ children, href, className }: Props) => {
  return (
    <LinkNext
      className={`py-2 text-blue-500 hover:underline ${className}`}
      href={href}
    >
      {children}
    </LinkNext>
  );
};
