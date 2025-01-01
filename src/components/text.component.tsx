import React from "react";

type TextProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "error" | "success";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  color = "primary",
  size = "md",
  className,
}) => {
  const colorClass = getColorClass(color);
  const sizeClass = getSizeClass(size);

  return (
    <p className={`text-${colorClass} text-${sizeClass} ${className}`}>
      {children}
    </p>
  );
};

const getColorClass = (color: TextProps["color"]): string => {
  switch (color) {
    case "primary":
      return "blue-500";
    case "secondary":
      return "gray-700";
    case "error":
      return "red-500";
    case "success":
      return "green-500";
    default:
      return "blue-500"; // Default to primary
  }
};

const getSizeClass = (size: TextProps["size"]): string => {
  switch (size) {
    case "sm":
      return "text-sm";
    case "md":
      return "text-base";
    case "lg":
      return "text-lg";
    default:
      return "text-base"; // Default to medium
  }
};

export default Text;
