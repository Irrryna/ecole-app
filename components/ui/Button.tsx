// components/ui/button.tsx
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "icon";
  size?: "default" | "sm" | "lg" | "icon";
}

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition " +
  "hover:opacity-90 disabled:opacity-50";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
  outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-800",
  icon: "bg-transparent hover:bg-gray-100 text-gray-800",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "px-4 py-2",
  sm: "px-3 py-1.5 text-sm",
  lg: "px-5 py-3 text-lg",
  icon: "h-10 w-10",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const cls = [base, variants[variant], sizes[size], className].join(" ").trim();
    return <button className={cls} {...props} ref={ref} />;
  }
);
Button.displayName = "Button";

export { Button };
export default Button;