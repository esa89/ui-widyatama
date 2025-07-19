import { default as React } from 'react';
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "destructive" | "destructive-secondary" | "white" | "outline" | "ghost";
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    size?: "sm" | "md" | "lg";
};
export declare const Button: React.FC<ButtonProps>;
