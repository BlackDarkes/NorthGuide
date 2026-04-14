import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ITextUnderlineProps {
  children: ReactNode;
}
  
export const TextUnderline = ({ children }: ITextUnderlineProps) => {
  return (
    <span className={cn(
      "relative",
      "before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:bg-foreground before:transition-all before:origin-left before:scale-0 before:duration-300",
      "hover:before:scale-100 hover:before:origin-left"
    )}>
      {children}
    </span>
  );
}