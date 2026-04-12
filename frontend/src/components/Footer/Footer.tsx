import { translation } from "../../helpers/translation";

interface FooterProps {
    language?: "PL" | "EN";
}

const footerText = {
    message: {
        EN: "We look forward to celebrating with you!",
        PL: "Nie możemy się doczekać by z Wami śwętować !",
    },
};

const Footer = ({ language = "EN" }: FooterProps) => {
    return (
        <footer className="bg-green-ink text-white p-6 text-center">
            <p>{translation(language, "message", footerText)}</p>
        </footer>
    );
};

export default Footer;
