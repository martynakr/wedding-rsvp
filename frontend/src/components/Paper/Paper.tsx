interface PaperProps {
    children: React.ReactNode;
}

const Paper = ({ children }: PaperProps) => {
    return (
        <div className="p-8 flex flex-col items-center rounded-lg bg-white/90 gap-6 sm:max-w-lg md:max-w-2xl flex-shrink-0">
            {children}
        </div>
    );
};

export default Paper;
