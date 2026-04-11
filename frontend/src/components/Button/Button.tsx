interface ButtonProps {
    variant: "Primary" | "Secondary";
    type?: "button" | "submit" | "reset";
    onClick?: () => unknown;
    children: React.ReactNode;
}

const Button = ({
    variant,
    type = "button",
    onClick,
    children,
}: ButtonProps) => {
    let classes = "rounded-md px-8 py-2 hover:cursor-pointer ";
    if (variant === "Primary") {
        classes += "bg-mist-gold";
    }

    if (variant === "Secondary") {
        classes += "bg-green-pond text-white";
    }
    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
