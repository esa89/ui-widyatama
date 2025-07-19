import { default as React } from 'react';
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};
export declare const Input: React.FC<InputProps>;
export {};
