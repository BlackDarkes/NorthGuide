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

export const FormLayout = ({
  title,
  description,
  children,
}: IFormLayoutProps) => {
  return (
    <Card className="w-full sm:max-w-md mx-2.5">
      <CardHeader className="flex flex-col items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
