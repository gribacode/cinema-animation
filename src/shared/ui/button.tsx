import { twMerge } from "tailwind-merge";

export const Button: Shared.UI.Button = ({ children, size = "md", className, ...props }) => {
  const sizeClassNames = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-base px-8 py-4",
  };

  return (
    <button className={twMerge("bg-white text-black-500 rounded-full", sizeClassNames[size], className)} {...props}>
      {children}
    </button>
  );
};
