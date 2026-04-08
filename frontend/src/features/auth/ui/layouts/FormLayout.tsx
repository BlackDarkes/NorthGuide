import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/index";

interface IFormLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const FormLayout = ({ title, description, children }: IFormLayoutProps) => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <Card className="w-full max-w-105 border-border/60 shadow-xl backdrop-blur-sm">
        <CardHeader className="text-center space-y-2 pb-6">
          <CardTitle className="text-2xl font-semibold tracking-tight">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};