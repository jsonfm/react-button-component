import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger" | "text";
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

    if(variant === "text"){
        variantClassName = `btn-text`;
    }

    let sizeClassName = `py-4`;

    if(size === "sm") {
        sizeClassName = `btn-sm`;
    }

    if(size === "md") {
        sizeClassName = `btn-md`;
    }

    if(size === "lg"){
        sizeClassName = `btn-lg`;
    }

    const outlineClassName = outline ? "!bg-transparent" : "";

    const baseClassName = `btn ${outline && "btn-outline"}`;
    const buttonClassName = `${sizeClassName} ${variantClassName} ${outlineClassName} ${shadowClassName} ${baseClassName}`;

    return (
        <div className={buttonClassName}>
            {children}
        </div>
    )
}
