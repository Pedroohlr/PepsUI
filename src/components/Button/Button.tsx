import React from "react";

type ButtonTypes =
    | "solid"
    | "outlined"
    | "dashed"
    | "filed"
    | "text"
    | "link"

export interface IButton {
    children: React.ReactNode;
    className?: string;
    variant?: ButtonTypes;
    onClick?: () => void;
}

const variantButtonClassMap: Record<ButtonTypes, string> = {
    solid: "bg-purple-600 text-white hover:bg-purple-700",
    outlined: "border border-purple-600 text-purple-600 hover:bg-purple-200",
    dashed: "border-2 border-dashed border-purple-600 text-purple-600 hover:bg-purple-50",
    filed: "bg-purple-300 text-purple-600 hover:bg-purple-400",
    text: "text-purple-600 hover:bg-purple-400",
    link: "text-purple-600 underline hover:text-purple-700",
}

export const Button: React.FC<IButton> = ({
    children,
    className,
    variant = 'solid', //default solid
    onClick
}) => {

    const variantButton = variantButtonClassMap[variant]

    return (
        <button
            onClick={onClick}
            className={ ["rounded-xl py-1 px-5", variantButton, className].join(" ") }
        >
            {children}
        </button>
    )
}
