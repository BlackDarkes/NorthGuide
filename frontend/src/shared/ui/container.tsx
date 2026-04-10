import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}
  
export const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={cn(
      "mx-auto w-[min(100%-20px,1280px)]",
      className,
    )}>
      {children}
    </div>
  );
}