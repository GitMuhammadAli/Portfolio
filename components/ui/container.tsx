import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  customProp?: string; 
}

export function Container({ className, ...props }: ContainerProps) {
  return <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`} {...props} />;
}
