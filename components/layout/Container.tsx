import type { ReactNode } from "react";

const sizeClasses = {
  narrow: "max-w-5xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

type ContainerProps = {
  children: ReactNode;
  size?: keyof typeof sizeClasses;
  className?: string;
};

export default function Container({
  children,
  size = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full ${sizeClasses[size]} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
