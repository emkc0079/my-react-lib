import React from "react";
type TextProps = {
    children: React.ReactNode;
    color?: "primary" | "secondary" | "error" | "success";
    size?: "sm" | "md" | "lg";
    className?: string;
};
declare const Text: React.FC<TextProps>;
export default Text;
