interface ButtonProps {
    variant: "Primary" | "Secondary";
    onClick: () => unknown;
    children: React.ReactNode;
}

const Button = ({ variant, onClick, children }: ButtonProps) => {
    console.log(variant);
    let classes = "rounded-md px-8 py-2 hover:cursor-pointer ";
    if (variant === "Primary") {
        classes += "bg-mist-gold";
    }
    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
