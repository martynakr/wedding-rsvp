interface PaperProps {
    children: React.ReactNode;
}

const Paper = ({ children }: PaperProps) => {
    return (
        <div className="p-8 flex flex-col items-center rounded-lg bg-white/90 gap-6 min-w-[50%] text-center">
            {children}
        </div>
    );
};

export default Paper;
