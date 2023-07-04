import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger" | "text";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    outline?: boolean;
    disabledShadow?: boolean;
}

const variants = {
    "primary": "btn-primary",
    "secondary": "btn-secondary",
    "danger": "btn-danger",
    "text": "btn-text"
}

const sizes = {
    "sm": "btn-sm",
    "md": "btn-md",
    "lg": "btn-lg"
}

export const Button = ({ variant, size = "md", outline = false, disabledShadow = false,  children }: ButtonProps) => {
    const variantClassName = variant ? `${variants[variant]}` : "";
    const shadowClassName = disabledShadow ? `!drop-shadow-none` : `drop-shadow-md`;

    const sizeClassName = `${sizes[size]}`;

    const outlineClassName = outline ? "btn-outline" : "";

    const baseClassName = `btn`;
    const buttonClassName = `${shadowClassName} ${baseClassName} ${variantClassName} ${sizeClassName} ${outlineClassName}`;

    return (
        <button className={buttonClassName}>
            {children}
        </button>
    )
}
