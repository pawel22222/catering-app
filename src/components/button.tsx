import { cn } from "@/utilsStyle";

type Props = {
  variant?: "primary" | "secondary" | "danger";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: Props) => {
  const buttonClass = (disabled: boolean) =>
    cn("py-2 px-4  rounded-md cursor-pointer transition", {
      "!bg-gray-300 !text-gray-600 !border-black cursor-default": disabled,
      "bg-blue-900": variant === "primary",
      "bg-gray-600": variant === "secondary",
      "bg-red-900": variant === "danger",
    });

  return (
    <button {...props} className={`${className} ${buttonClass(!!disabled)} `}>
      {children}
    </button>
  );
};
