import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    outline?: boolean;
}

export const Button = ({ variant = "primary", size = "md", outline = false,  children }: ButtonProps) => {
    let variantClassName = `bg-primary !text-white`;

    if(variant === "primary"){
        variantClassName = `bg-neutral`;
    }

    if(variant === "secondary"){
        variantClassName = `bg-secondary`;
    }

    let sizeClassName = `py-2`;

    if(sizeClassName === "md") {
        sizeClassName = `py-4`;
    }

    if(sizeClassName === "md") {
        sizeClassName = `py-6`;
    }

    const outlineClassName = outline ? "!bg-transparent" : "";


    const baseClassName = `px-4 ${sizeClassName} ${variantClassName} ${outlineClassName} cursor-pointer rounded-md flex justify-center transition-200`
    return (
        <div className={baseClassName}>
            {children}
        </div>
    )
}
