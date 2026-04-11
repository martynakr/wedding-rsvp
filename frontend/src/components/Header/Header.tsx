import Paper from "../Paper/Paper";
interface HeaderProps {
    headingTxt: string;
    desc: string;
}
const Header = ({ headingTxt, desc }: HeaderProps) => {
    return (
        <header
            className="bg-[url('/wedding_hero.jpeg')] bg-cover bg-center h-screen w-screen flex flex-col items-center justify-end p-6 lg:px-64"
            id="header"
        >
            <Paper>
                <h1 className="text-4xl text-green-ink font-parisienne text-center">
                    {headingTxt}
                </h1>
                <p>{desc}</p>
            </Paper>
        </header>
    );
};

export default Header;
