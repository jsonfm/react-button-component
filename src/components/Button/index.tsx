import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    outline?: boolean;
    disabledShadow?: boolean;
}

export const Button = ({ variant = "primary", size = "md", outline = false, disabledShadow = false,  children }: ButtonProps) => {
    let variantClassName = `bg-primary !text-white`;
    const shadowClassName = disabledShadow ? `!drop-shadow-none` : `drop-shadow-md`;
    if(variant === "primary"){
        variantClassName = `bg-neutral`;
    }

    if(variant === "secondary"){
        variantClassName = `bg-secondary`;
    }

    let sizeClassName = `py-2`;

    if(size === "sm") {
        sizeClassName = `py-1`;
    }

    if(size === "md") {
        sizeClassName = `py-2`;
    }

    if(size === "lg"){
        sizeClassName = `py-4`
    }

    const outlineClassName = outline ? "!bg-transparent" : "";

    const baseClassName = `btn`;
    const buttonClassName = `${sizeClassName} ${variantClassName} ${outlineClassName} ${shadowClassName} ${baseClassName}`;
    return (
        <div className={buttonClassName}>
            {children}
        </div>
    )
}
