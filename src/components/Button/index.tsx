import { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger" | "text";
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
    outline?: boolean;
    disabledShadow?: boolean;
    loading?: boolean;
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

export const Spinner = () => (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
)

export const Button = ({ variant, size = "md", outline = false, disabledShadow = false,  children, loading = false }: ButtonProps) => {
    const variantClassName = variant ? `${variants[variant]}` : "";
    const shadowClassName = disabledShadow ? `!drop-shadow-none` : `drop-shadow-md`;
    const sizeClassName = `${sizes[size]}`;
    const outlineClassName = outline ? "btn-outline" : "";
    const baseClassName = `btn`;
    const loadingClassName = loading ? `opacity-[50%] flex justify-between items-center gap-2` : ``;
    const buttonClassName = `${shadowClassName} ${baseClassName} ${variantClassName} ${sizeClassName} ${outlineClassName} ${loadingClassName}`;

    return (
        <button disabled={loading} className={buttonClassName}>
           {loading && <Spinner/>} {children}
        </button>
    )
}
