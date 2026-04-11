interface PaperProps {
    children: React.ReactNode;
    className?: string;
}

const Paper = ({ children, className }: PaperProps) => {
    return (
        <div
            className={`p-8 flex flex-col items-center rounded-lg bg-white/80 gap-6 w-full md:min-w-[50%] text-center ${className}`}
        >
            {children}
        </div>
    );
};

export default Paper;
