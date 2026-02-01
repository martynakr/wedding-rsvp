import Paper from "../Paper/Paper";
//   bg-gradient-to-b from-lotus-cream via-lotus-pollen via-mist-gold via-green-sage to-green-ink
const Header = () => {
    return (
        <header className="bg-[url('/wedding_hero.jpeg')] bg-cover bg-center h-screen w-screen flex flex-col items-center justify-end p-6">
            <Paper>
                <h1 className="text-4xl text-green-ink font-parisienne text-center">
                    Pierre & Martyna are getting married
                </h1>
                <p>Lucky you, you're invited!</p>
            </Paper>
        </header>
    );
};

export default Header;
